import { Component, OnInit } from '@angular/core';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import { Geolocation } from '@capacitor/geolocation';
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer.js";
// TODO: DEL SERVICIO DE LA API DE ARCGIS
import * as query from "@arcgis/core/rest/query.js";

// TODO: DEL SERVICIO DE SIGSA
// import * as data from "./GEOJson.json";


@Component({
  selector: 'app-visor',
  templateUrl: 'visor.component.html',
  styleUrls: ['visor.component.scss'],
})
export class VisorComponent implements OnInit {
  // TODO: PARA ALMACENAR LOS DATOS QUE VIENEN DESDE EL GEOJson.json
  // jsonData: any = (data as any).default;

  constructor() {
  }

  private latitude: number = 0;
  private longitude: number = 0;


  public async ngOnInit()  {
    let geoJson: any;
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;

    /* TODO: Utilizar la api de arcgis para generar el GeoJson,
    con la url de monitoreo sigsa, crear el query como en la interfaz
    del servicio de sigsa, mediante codigo. */

    const queryUrl:string =
    "https://monitoreopmx.sigsa.info/server/rest/services/PMX/Capas_SICREP_06042022/MapServer/5";


    const queryMap = await query.executeQueryJSON(queryUrl,
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

        }
    });


    features.push(feature);
    geoJson = { type: "FeatureCollection", features: features[0] };

  }, function(error){
      console.log("ERROR: ", error);
      return error;
    });


    // si hay internet el geoJson se quedara igual, si no hay internet tomarlo del geoJsonLocal


    // generar el geojson
    // TODO: Generar capas del GEOJson.json para mostrarlas en el mapa base.
    const blob = new Blob([JSON.stringify(geoJson)],{
        type: "application/json"
      });

      const url = URL.createObjectURL(blob);

      const layer = new GeoJSONLayer({
        url
      });


      // TODO: Configuracion del mapa con sus capas.
      const map = new Map({
        basemap: "topo-vector", // hybrid
        layers: [layer]
      });

      const view = new MapView({
        container: "container",
        map: map,
        zoom: 5,
        center: [this.longitude, this.latitude],
      })
  }



}
