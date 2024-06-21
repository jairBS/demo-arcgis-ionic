import { Component } from '@angular/core';
// para boton atras de android
import { Optional } from '@angular/core';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // TODO: Validar si no hay un proceso pendiente antes de cerrar la app.
  // para boton atras de android
  constructor(private platform: Platform, @Optional() private routerOutlet?: IonRouterOutlet) {
    // para boton atras de android
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if(!this.routerOutlet?.canGoBack()) {
        App.exitApp();
      }
    })
  }
}
