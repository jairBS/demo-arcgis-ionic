import { Component, OnInit } from '@angular/core';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {



  constructor() {
  }

  private latitude: number = 0;
  private longitude: number = 0;


  public async ngOnInit()  {
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;

    const map = new Map({
      basemap: "topo-vector"
    });

    const view = new MapView({
      container: "container",
      map: map,
      zoom: 4,
      center: [this.longitude, this.latitude],
    })
  }



}
