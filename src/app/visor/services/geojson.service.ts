import { Injectable } from "@angular/core";

import { geoJsonStorageService } from "./geojson-storage.service";
@Injectable()
export class geoJsonService {

  constructor(private storage: geoJsonStorageService) { }

  addGeoJson(item:any)  {
    return this.storage.post(item);
  }

  /*editItem(item:any, changes:any) {
    return this.storage.put(item, changes)
  }*/

  /*deleteItem(item:any) {
    return this.storage.destroy(item);
  }*/

  getGeoJson() {
    return this.storage.getGeoJson();
  }

  deletelocalStorageGeoJson() {
    return this.storage.deleteStorageGeoJson();
  }
}
