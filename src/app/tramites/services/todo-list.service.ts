import { Injectable } from "@angular/core";
import { TodoListStorageService } from "./todo-list-storage.service";

@Injectable()
export class TodoListService {

  constructor(private storage: TodoListStorageService) {

  }

//   private todoList = [{
//     nombre: "tramite 1",
//     descripcion: "descripcion 1"
//   },
//   {
//     nombre: "tramite 2",
//     descripcion: "descripcion 2"
//   },
//   {
//     nombre: "tramite 3",
//     descripcion: "descripcion 3"
//   },
//   {
//     nombre: "tramite 4",
//     descripcion: "descripcion 4"
//   }

// ]



  addItem(item:any)  {
    return this.storage.post(item);
}

  getTodoList() {
    console.log("GET", this.storage.get());
    return this.storage.get();
  }
}
