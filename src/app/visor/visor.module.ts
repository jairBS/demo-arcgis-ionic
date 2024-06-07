import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { VisorComponent } from './visor.component';

import { VisorComponentRoutingModule } from './visor-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisorComponentRoutingModule
  ],
  declarations: [VisorComponent]
})
export class VisorComponentModule {}
