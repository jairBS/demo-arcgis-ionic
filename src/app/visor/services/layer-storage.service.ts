import { Injectable } from '@angular/core';

const storageName = 'layers';

@Injectable()
export class geoJsonLayerStorageService {
  private geoJsonLayer: any;

  constructor() {
    const storedLayer = localStorage.getItem(storageName);
    this.geoJsonLayer = storedLayer ? JSON.parse(storedLayer) : [];
  }

   // get items
  get() {
    return [...this.geoJsonLayer];
  }

  deleteStorageLayers() {
    localStorage.removeItem(storageName);
    this.geoJsonLayer = [];
  }

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.geoJsonLayer));
    return this.get();
  }

   // agregar un nuevo item
  post(item: any) {
    this.geoJsonLayer.push(item);
    return this.update();
  }

  /*private findItemIndex(item: any) {
    console.log("indice", this.geoJsonLayer.indexOf(item));
    return this.geoJsonLayer.indexOf(item);
  }*/

  // actualizar un item
  /*put(item: any, changes: any) {
    Object.assign(this.geoJsonLayer[this.findItemIndex(item)], changes);
    return this.update();
  }*/

  // eliminar un item
  /*destroy(item: any) {
    this.geoJsonLayer.splice(this.findItemIndex(item), 1);
    return this.update();
  }*/
}
