import { Component, OnInit  } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

// Services.
import { TodoListService } from './services/todo-list.service';
import { CheckNetworkService } from './services/check-network.service';
import { PhotosService } from './services/photos.service';

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
  isModalOpenFoto = false;
  titleModal = "Agregar trámite";
  titleButton = "Agregar";
  alertButtons = ['Aceptar'];

  constructor(
    private todoListService: TodoListService,
    private checkNetworkService: CheckNetworkService,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    public photoService: PhotosService,
  ) { }

  public todoList: any;
  public networkStatus: any;
  public idTramite:number = 0;

  async ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
    // TODO: para que el usuario navegue por primera vez todas las fotos se carguen y se muestren en
    // pantalla
    await this.photoService.loadSaved();
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    this.clearData();
    this.titleModal = "Agregar trámite";
    this.titleButton = "Agregar";
  }

  clearData() {
    this.tramite.id = null;
    this.tramite.nombre = '';
    this.tramite.descripcion = '';
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
    id: null,
    nombre: '',
    descripcion: '',
  }

  public itemSelected: Tramite = {
    id: null,
    nombre: '',
    descripcion: ''
  }

  emitTramite():void {
    if(this.tramite.id) {
      this.todoList = this.todoListService.editItem(this.itemSelected,
        // data actualizada
        {
          id: this.tramite.id,
          nombre: this.tramite.nombre,
          descripcion: this.tramite.descripcion
        }
      );
    } else {
      this.addItem(this.tramite);
    }

    this.clearData();
    this.isModalOpen  = false;

    this.todoListService.getTodoList();
  }

  addItem(item: Tramite) {
    const { nombre, descripcion } = item;

    this.todoList = this.todoListService.addItem({
      id:  Math.floor(Math.random() * 10000),
      nombre,
      descripcion,
    });
  }

  setData(item: Tramite) {
    this.titleModal = "Editar trámite";
    this.titleButton = "Editar";
    this.isModalOpen = true;
    this.tramite = { ...item };
    this.itemSelected = item;
  }

  deleteItem(item: Tramite) {
    if(item.id) {
      this.todoList = this.todoListService.deleteItem(item);
    }
  }

  setOpenFoto(isOpen: boolean) {
    this.isModalOpenFoto = isOpen;
  }

  async addPhotoToGallery() {
    //await this.photoService.addNewToGallery(); // mandar id
    this.photoService.addNewToGallery();
  }

}

