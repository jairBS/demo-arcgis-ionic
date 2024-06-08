import { Component, OnInit  } from '@angular/core';
import { Tramite } from './interfaces/tramite.interface';
import { TodoListService } from './services/todo-list.service';
@Component({
  selector: 'app-form-tramites',
  templateUrl: 'tramites.component.html',
  styleUrls: ['tramites.component.scss'],
})



export class TramitesComponent implements OnInit  {

  constructor(private todoListService: TodoListService) {

  }

  public todoList: any;

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  public tramite: Tramite = {
    nombre: '',
    descripcion: '',
  }

  addItem(item: any) {
    const { nombre, descripcion } = item;
    console.log("nombre", nombre, descripcion);
    //this.todoList.push({ nombre, descripcion})
   // this.todoListService.addItem(item);
    this.todoList = this.todoListService.addItem(item);
  }

  emitTramite():void {
    console.log(this.tramite);
    this.addItem(this.tramite);
    this.tramite.nombre = '';
    this.tramite.descripcion = '';
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }



}

