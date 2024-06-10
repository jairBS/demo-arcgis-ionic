import { Injectable } from "@angular/core";
import { TodoListStorageService } from "./todo-list-storage.service";

@Injectable()
export class TodoListService {

  constructor(private storage: TodoListStorageService) { }

  addItem(item:any)  {
    return this.storage.post(item);
  }

  getTodoList() {
    return this.storage.get();
  }
}
