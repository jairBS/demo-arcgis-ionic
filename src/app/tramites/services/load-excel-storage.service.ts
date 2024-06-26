import { Injectable } from '@angular/core';

const storageName = 'tramites_excel';

@Injectable({
     providedIn: 'root'
   })
export class ExcelTramitesStorageService {
  private excelTramites: any;

  constructor() {
    const storedTramitesExcel = localStorage.getItem(storageName);
    this.excelTramites = storedTramitesExcel ? JSON.parse(storedTramitesExcel) : [];
  }

   // get items
  get() {
    return [...this.excelTramites];
  }

  deleteStorageTramitesExcel() {
    localStorage.removeItem(storageName);
    this.excelTramites = [];
  }

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.excelTramites));
    return this.get();
  }

   // agregar un nuevo item
  post(item: any) {
    this.excelTramites.push(item);
    return this.update();
  }

  private findItemIndex(item: any) {
    console.log("indice", this.excelTramites.indexOf(item));
    return this.excelTramites.indexOf(item);
  }

  // actualizar un item
  put(item: any, changes: any) {
    Object.assign(this.excelTramites[this.findItemIndex(item)], changes);
    return this.update();
  }

  // eliminar un item
  destroy(item: any) {
    this.excelTramites.splice(this.findItemIndex(item), 1);
    return this.update();
  }
}
