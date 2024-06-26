import { Injectable } from '@angular/core';

const storageName = 'tramites';

// const defaultList = [
//   { nombre: 'tramite 0', descripcion: 'descridapacion 0' }
// ];

@Injectable()
export class TodoListStorageService {
  private todoList: any;

  constructor() {
    const storedTramites = localStorage.getItem(storageName);
    this.todoList = storedTramites ? JSON.parse(storedTramites) : [];
  }

   // get items
  get() {
    return [...this.todoList];
  }

  deleteStorageTramites() {
    localStorage.removeItem(storageName);
    this.todoList = [];
  }

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));
    return this.get();
  }

   // agregar un nuevo item
  post(item: any) {
    this.todoList.push(item);
    return this.update();
  }

  private findItemIndex(item: any) {
    console.log("indice", this.todoList.indexOf(item));
    return this.todoList.indexOf(item);
  }

  // actualizar un item
  put(item: any, changes: any) {
    Object.assign(this.todoList[this.findItemIndex(item)], changes);
    return this.update();
  }

  // eliminar un item
  destroy(item: any) {
    this.todoList.splice(this.findItemIndex(item), 1);
    return this.update();
  }
}
