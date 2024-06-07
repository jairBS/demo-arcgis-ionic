import { Component, OnInit } from '@angular/core';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'visor.component.html',
  styleUrls: ['visor.component.scss'],
})
export class VisorComponent implements OnInit {



  constructor() {
  }

  private latitude: number = 0;
  private longitude: number = 0;


  public async ngOnInit()  {
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;

    const map = new Map({
      basemap: "topo-vector" // hybrid
    });

    const view = new MapView({
      container: "container",
      map: map,
      zoom: 5,
      center: [this.longitude, this.latitude],
    })
  }



}
