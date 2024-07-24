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
  ) { }

  private latitude: number = 0;
  private longitude: number = 0;
  public map:any;
  public view:any;
  public layer:any;
  public geoJsonLocal:any;

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

  public async ngOnInit()  {
    // si hay internet el geoJson se quedara igual, si no hay internet tomarlo del geoJsonLocal
    const networkStatus =  await this.checkNetworkService.getCurrentNetworkStatus();

    if(networkStatus.connected) {
      const position = await Geolocation.getCurrentPosition();
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;

      const geoJson =  await this.createGeoJsonByQuery();

      if(geoJson.type === "error") {
        this.presentAlert(geoJson.error?.message,"");

      } else {
        this.layer = this.createLayerByGeoJson(geoJson);

        await this.showLoading('¡Guardando capa en almacenamiento local, por favor espere!');
        this.getGeoJsonLocal(geoJson);
        this.presentAlert('¡Capa almacenada con éxito!',"");

        this.createMap("topo-vector", this.layer, this.longitude, this.latitude);
      }

    } else {
      // OFFLINE
      await this.showLoading('¡Obteniendo capa de almacenamiento local, por favor espere!');
      const [geoJsonLocal] = this.geoJsonService.getGeoJson();

      this.latitude = 20.070662;
      this.longitude = -98.7836686;

      this.layer = this.createLayerByGeoJson(geoJsonLocal);
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


  getGeoJsonLocal(geoJson:any) {
    this.geoJsonService.deletelocalStorageGeoJson();
    this.geoJsonService.addGeoJson(geoJson);
    const [geoJsonLocal] = this.geoJsonService.getGeoJson();
    return geoJsonLocal;
  }

  async createGeoJsonByQuery() {
    /* TODO: Utilizar la api de arcgis para generar el GeoJson,
    con la url de monitoreo sigsa, crear el query como en la interfaz
    del servicio de sigsa, mediante codigo. */
    const queryUrl:string =
    "https://monitoreopmx.sigsa.info/server/rest/services/PMX/Capas_SICREP_06042022/MapServer/5";

    let resultQuery:any;

    await query.executeQueryJSON(queryUrl,
      {
        where: "1=1",
        outFields: ["*"],
        returnGeometry: true,
      }).then(function(results:any) {

        const features = [];
        const feature = results.features.map((feature:any) => {

          return {
            type: "Feature",
            id: feature.attributes.FID,
            geometry: {
              type: "Polygon",
              coordinates: feature.geometry.rings,
            },
            properties: feature.attributes,
            };

        });

      features.push(feature);
      resultQuery =  { type: "FeatureCollection", features: features[0] };

      }, function(error){
          console.error(error);
          resultQuery = { type: "error", error: error }
      });

      return resultQuery;
  }



  createLayerByGeoJson(geoJsonLayer:any) {
    // TODO: Generar capas del GEOJson.json para mostrarlas en el mapa base.
    const blob = new Blob([JSON.stringify(geoJsonLayer)],{
        type: "application/json"
    });

    const url = URL.createObjectURL(blob);

    const layer = new GeoJSONLayer({
      url
    });

    return layer;
  }

}
