import { Component, OnInit  } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

// Services.
import { TodoListService } from './services/todo-list.service';
import { CheckNetworkService } from './services/check-network.service';

// Interfaces.
import { Tramite } from './interfaces/tramite.interface';
@Component({
  selector: 'app-form-tramites',
  templateUrl: 'tramites.component.html',
  styleUrls: ['tramites.component.scss'],
})


export class TramitesComponent implements OnInit  {
  isAlertOpen = false;
  isModalOpen = false;
  alertButtons = ['Aceptar'];

  constructor(
    private todoListService: TodoListService,
    private checkNetworkService: CheckNetworkService,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
  ) { }

  public todoList: any;
  public networkStatus: any;

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setOpenDialogConnection(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async checkNetworkStatus() {
    this.networkStatus = await this.checkNetworkService.getCurrentNetworkStatus();

    if(this.networkStatus.connected) {
      await this.showLoading();
    } else {
      await this.presentAlert(
        '¡No es posible realizar la sincronización de datos, verifique su conexión a internet!',
        ''
      );
    }
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: '¡Sincronizando datos, por favor espere!',
      duration: 3000,
    });

    // mostrar loading
    await loading.present();
    // esperar a que el loading se termine...
    await loading.onDidDismiss();
    // despues mostrar alerta
    this.presentAlert(
        '¡Datos sincronizados con éxito!',
       `Total de datos sincronizados: ${this.todoList.length} de ${this.todoList.length}`
    );
  }

  // para ng model
  public tramite: Tramite = {
    nombre: '',
    descripcion: '',
  }

  emitTramite():void {
    this.addItem(this.tramite);

    this.tramite.nombre = '';
    this.tramite.descripcion = '';
    this.isModalOpen  = false;

    this.todoListService.getTodoList();
  }

  addItem(item: Tramite) {
    const { nombre, descripcion } = item;

    this.todoList = this.todoListService.addItem({
      nombre,
      descripcion,
    });
  }

}

