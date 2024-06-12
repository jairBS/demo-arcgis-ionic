import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterModule } from './components/footer/footer.module';
import { MenuModule } from './components/menu/menu.module';
import { HeaderModule } from './components/header/header.module';

import { TodoListService } from './tramites/services/todo-list.service';
import { TodoListStorageService } from './tramites/services/todo-list-storage.service';
import { PhotosService } from './tramites/services/photos.service';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, MenuModule, HeaderModule, FooterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, TodoListService, TodoListStorageService, PhotosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
