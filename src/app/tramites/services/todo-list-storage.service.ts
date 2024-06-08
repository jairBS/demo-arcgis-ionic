import { Injectable } from '@angular/core';

const storageName = 'aah_todo_list';

const defaultList = [
  { nombre: 'tramite 0', descripcion: 'descripcion 0' }
];

@Injectable()
export class TodoListStorageService {

  private todoList: any;



  constructor() {
    const storedTramites = localStorage.getItem(storageName);
    this.todoList = storedTramites ? JSON.parse(storedTramites) : defaultList;

  }

   // get items
   get() {
    return [...this.todoList];
   }

   private update() {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));

    return this.get();
  }

   // add a new item
   post(item: any) {
    this.todoList.push(item);
    return this.update();
   }

   private findItemIndex(item: any) {
    return this.todoList.indexOf(item);
  }

   // update an item
   put(item: any, changes: any) {
    Object.assign(this.todoList[this.findItemIndex(item)], changes);
    return this.update();
   }

   // remove an item
   destroy(item: any) {
    this.todoList.splice(this.findItemIndex(item), 1);
    return this.update();
   }
}
