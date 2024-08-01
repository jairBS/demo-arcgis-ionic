import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import { Geolocation } from '@capacitor/geolocation';
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer.js";
// TODO: DEL SERVICIO DE LA API DE ARCGIS
import * as query from "@arcgis/core/rest/query.js";

// TODO: DEL SERVICIO DE SIGSA
// import * as data from "./GEOJson.json";

import { CheckNetworkService } from '../tramites/services/check-network.service';
import { geoJsonService } from './services/geojson.service';

import esriId from "@arcgis/core/identity/IdentityManager.js";
import { Platform } from '@ionic/angular';

import { Network } from '@capacitor/network';
@Component({
  selector: 'app-visor',
  templateUrl: 'visor.component.html',
  styleUrls: ['visor.component.scss'],
})
export class VisorComponent implements OnInit {
  // TODO: PARA ALMACENAR LOS DATOS QUE VIENEN DESDE EL GEOJson.json
  //jsonData: any = (data as any).default;

  constructor(
    private checkNetworkService: CheckNetworkService,
    private geoJsonService: geoJsonService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private platform: Platform,
  ) {
    console.log("constructor");
    this.switchOnlineOrOfflineMode();
  }

  private latitude: number = 0;
  private longitude: number = 0;
  public map:any;
  public view:any;
  public layer:any;
  public geoJsonLocal:any;
  public msgSaveLayer:string = "¡Guardando capa en almacenamiento local, por favor espere!";

  switchOnlineOrOfflineMode() {
    Network.addListener('networkStatusChange', status => {
      console.log('Network status changed desde visor', status);
      console.log("el status conecteded", status.connected);
       this.ngOnInit(status.connected);
    });
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async showLoading(message:string) {
    const loading = await this.loadingController.create({
      message: message,
      duration: 3000,
    });

    // mostrar loading
    await loading.present();
    // esperar a que el loading se termine...
    await loading.onDidDismiss();
  }

  public async ngOnInit(conected:boolean = true)  {
    const networkStatus =  await this.checkNetworkService.getCurrentNetworkStatus();

    if(conected && networkStatus.connected) {
      console.log("online");
      const position = await Geolocation.getCurrentPosition();
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      console.log("latitude: ", this.latitude);
      console.log("longitud: ", this.longitude);

      this.generateToken();

      const geoJson =  await this.createGeoJsonByQuery();
      console.log("geo json: ", geoJson);

      if(geoJson.type === "error") {
        this.presentAlert(geoJson.error?.message,"Error al crear GeoJson");
      } else {
        /* muestra mensaje para guardar capa,
        en realidad guarda el geojson para posteriormente crear la capa. */
        await this.showLoading(this.msgSaveLayer);
        this.saveGeoJsonLocal(geoJson);
        this.presentAlert('¡Capa almacenada con éxito!',"");

        // crear la capa para la creacion del mapa.
        this.layer = this.createLayerByGeoJson(geoJson);

        // crear el mapa
        this.createMap("topo-vector", this.layer, this.longitude, this.latitude);
      }

    } else {
      console.log("offline");

      this.latitude = 20.070662;
      this.longitude = -98.7836686;
      console.log("latitude: ", this.latitude);
      console.log("longitude: ", this.longitude);

      // en realidad obtiene el geojson de almacenamiento local para posteriormente crear capa.
      await this.showLoading('¡Obteniendo capa de almacenamiento local, por favor espere!');
      const [geoJsonLocal] = this.geoJsonService.getGeoJson();
      console.log("obtencion de geojson local: ", geoJsonLocal);

      // TODO: SE NECESITA DE INTERNET PARA CREAR LAYER?
      this.layer = this.createLayerByGeoJson(geoJsonLocal);
      console.log("layer asignada", this.layer);

      this.createMap("", this.layer, this.longitude, this.latitude);
    }
  }

  createMap(baseMap:string = "",layer:any,lon:number,lat:number) {
    if(baseMap === "") {
      this.map = new Map({
        layers:[layer]
      });
    } else {
      this.map = new Map({
        basemap: baseMap,//"topo-vector", // hybrid
        layers:[layer]
      });
    }


    this.view = new MapView({
      container: "container",
      map: this.map,
      zoom: 5,
      center:  [lon, lat],
    });
  }

  saveGeoJsonLocal(geoJson:any) {
    // eliminar los geojson que se tienen guardados
    this.geoJsonService.deletelocalStorageGeoJson();
    this.geoJsonService.addGeoJson(geoJson);
    console.log("geojson almacenado en localstorage");
  }


  /* getGeoJsonLocal(geoJson:any) {
    this.geoJsonService.deletelocalStorageGeoJson();
    this.geoJsonService.addGeoJson(geoJson);
    const [geoJsonLocal] = this.geoJsonService.getGeoJson();
    return geoJsonLocal;
  } */

  generateToken() {
    console.log("1 - generate token");
    const portalUrl:string = "https://monitoreopmx.sigsa.info/portal/sharing/rest/generateToken";

    const formData = new FormData();
    let referer:string = "";

    formData.append("username", "villapmx");
    formData.append("password", "villa.2020");
    referer = this.platform.is("hybrid") ? "https://localhost" : "http://localhost:8100";
    formData.append("referer", referer);

    /* if(this.platform.is("hybrid")) {
      formData.append("referer", "https://localhost");

    } else {
      formData.append("referer", "http://localhost:8100");
    } */

    formData.append("expiration", "60");
    formData.append("f", "json");

    this.getToken(portalUrl, formData)
      .then(data => {
        esriId.registerToken({
          token: data.token,
          server: portalUrl,
          ssl: true,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  async getToken(url:string, data:FormData) {
    console.log("2 - get token");
    const response = await fetch(url,{
      method: "POST",
      body: data,
    });

    return response.json();
  }

  async createGeoJsonByQuery() {
    /* TODO: Utilizar la api de arcgis para generar el GeoJson,
    con la url de monitoreo sigsa, crear el query como en la interfaz
    del servicio de sigsa, mediante codigo. */
    const queryUrl:string =
    "https://monitoreopmx.sigsa.info/server/rest/services/PMX/Capas_SICREP_06042022/MapServer/5";

    let resultQuery:any;

    try {
      const results = await query.executeQueryJSON(queryUrl, {
        where: "1=1",
        outFields: ["*"],
        returnGeometry: true,
      });

      const features = results.features.map((feature: any) => ({
        type: "Feature",
        id: feature.attributes.FID,
        geometry: {
          type: "Polygon",
          coordinates: feature.geometry.rings,
        },
        properties: feature.attributes,
      }));

      resultQuery = { type: "FeatureCollection", features: features };
    } catch (error) {
      resultQuery = { type: "error", error: error };
    }

    return resultQuery;
  }


  createLayerByGeoJson(geoJsonLayer:any) {
    console.log("creando layer");
    // TODO: Generar capas del GEOJson.json para mostrarlas en el mapa base.
    const blob = new Blob([JSON.stringify(geoJsonLayer)],{
        type: "application/json"
    });

    const url = URL.createObjectURL(blob);

    const layer = new GeoJSONLayer({
      url
    });

    console.log("layer resultante", layer);

    return layer;
  }

}
