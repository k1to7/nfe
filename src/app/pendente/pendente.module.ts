import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendentePageRoutingModule } from './pendente-routing.module';

import { PendentePage } from './pendente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendentePageRoutingModule
  ],
  declarations: [PendentePage]
})
export class PendentePageModule {}
