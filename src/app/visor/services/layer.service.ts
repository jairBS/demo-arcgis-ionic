import { Injectable } from "@angular/core";

import { geoJsonLayerStorageService } from "./layer-storage.service";
@Injectable()
export class geoJsonLayersService {

  constructor(private storage: geoJsonLayerStorageService) { }

  addLayer(item:any)  {
    return this.storage.post(item);
  }

  /*editItem(item:any, changes:any) {
    return this.storage.put(item, changes)
  }*/

  /*deleteItem(item:any) {
    return this.storage.destroy(item);
  }*/

  getLayers() {
    return this.storage.get();
  }

  deletelocalStorageLayers() {
    return this.storage.deleteStorageLayers();
  }
}
