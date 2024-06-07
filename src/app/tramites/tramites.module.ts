import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TramitesComponent } from './tramites.component';

import { TramitesComponentRoutingModule } from './tramites-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TramitesComponentRoutingModule
  ],
  declarations: [TramitesComponent]
})
export class TramitesComponentModule {}
