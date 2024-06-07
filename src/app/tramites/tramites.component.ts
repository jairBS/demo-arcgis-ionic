import { Component  } from '@angular/core';
import { Tramite } from './interfaces/tramite.interface';

@Component({
  selector: 'app-form-tramites',
  templateUrl: 'tramites.component.html',
  styleUrls: ['tramites.component.scss'],
})
export class TramitesComponent  {

  public tramite: Tramite = {
    nombre: '',
    descripcion: '',
  }

  emitTramite():void {
    console.log(this.tramite);
    this.tramite.nombre = '';
    this.tramite.descripcion = '';
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }



}
