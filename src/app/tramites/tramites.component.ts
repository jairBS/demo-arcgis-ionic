import { Component, OnInit  } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Tramite } from './interfaces/tramite.interface';
import { TodoListService } from './services/todo-list.service';


import { CheckNetworkService } from './services/check-network.service';
@Component({
  selector: 'app-form-tramites',
  templateUrl: 'tramites.component.html',
  styleUrls: ['tramites.component.scss'],
})



export class TramitesComponent implements OnInit  {
  isAlertOpen = false;

  alertButtons = ['Aceptar'];

  constructor(
    private todoListService: TodoListService,
    private checkNetworkService: CheckNetworkService,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
  ) {

  }



  public todoList: any;
  public networkStatus: any;

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  async checkNetworkStatus() {
    this.networkStatus = await this.checkNetworkService.getCurrentNetworkStatus();
    if(this.networkStatus.connected) {
      console.log("estas conectado");
      await this.showLoading();
    } else {
      console.log("no estas conectado");
      // this.isAlertOpen = true;
      await this.presentAlert(
        '¡No es posible realizar la sincronización de datos, verifique su conexión a internet!',
        ''
      );
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: '¡Sincronizando datos, por favor espere!',
      duration: 3000,
    });

    await loading.present();

    // Esperar a que el loading termine
    await loading.onDidDismiss();

    // Mostrar el alert después de que el loading se cierra
    this.presentAlert(
        '¡Datos sincronizados con éxito!',
       `Total de datos sincronizados: ${this.todoList.length} de ${this.todoList.length}`
    );

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
    this.todoList = this.todoListService.addItem({
      nombre,
      descripcion,
    });
  }

  emitTramite():void {
    console.log(this.tramite);
    this.addItem(this.tramite);
    this.tramite.nombre = '';
    this.tramite.descripcion = '';

    this.isModalOpen  = false;
    this.todoListService.getTodoList();
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setOpenDialogConnection(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }



}

