import { Injectable } from '@angular/core';

const storageName = 'geojson';

@Injectable()
export class geoJsonStorageService {
  private geoJson: any;

  constructor() {
    const storedLayer = localStorage.getItem(storageName);
    this.geoJson = storedLayer ? JSON.parse(storedLayer) : [];
  }

   // get items
  getGeoJson() {
    return [...this.geoJson];
  }

  deleteStorageGeoJson() {
    localStorage.removeItem(storageName);
    this.geoJson = [];
  }

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.geoJson));
    return this.getGeoJson();
  }

   // agregar un nuevo item
  post(item: any) {
    this.geoJson.push(item);
    return this.update();
  }

  /*private findItemIndex(item: any) {
    console.log("indice", this.geoJson.indexOf(item));
    return this.geoJson.indexOf(item);
  }*/

  // actualizar un item
  /*put(item: any, changes: any) {
    Object.assign(this.geoJson[this.findItemIndex(item)], changes);
    return this.update();
  }*/

  // eliminar un item
  /*destroy(item: any) {
    this.geoJson.splice(this.findItemIndex(item), 1);
    return this.update();
  }*/
}
