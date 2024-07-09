import { Component, OnInit } from '@angular/core';
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
    private geoJsonService: geoJsonService
  ) { }

  private latitude: number = 0;
  private longitude: number = 0;
  public map:any;
  public view:any;


  public async ngOnInit()  {
    // si hay internet el geoJson se quedara igual, si no hay internet tomarlo del geoJsonLocal
    const networkStatus =  await this.checkNetworkService.getCurrentNetworkStatus();

    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;

    const geoJson =  await this.createGeoJsonByQuery();
    const layer = this.createLayerByGeoJson(geoJson);

    // devuelve el geoJson almacenado del localStorage.
    const geoJsonLocal = this.getGeoJsonLocal(geoJson);
    const layerLocal = this.createLayerByGeoJson(geoJsonLocal);

    this.createMap("topo-vector", layer, this.longitude, this.latitude);
  }

  createMap(baseMap:string,layer:any,lon:number,lat:number) {
    this.map = new Map({
      basemap: baseMap,//"topo-vector", // hybrid
      layers:[layer]
    });

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
