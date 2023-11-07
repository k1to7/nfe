import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsqueciPageRoutingModule } from './esqueci-routing.module';

import { EsqueciPage } from './esqueci.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsqueciPageRoutingModule
  ],
  declarations: [EsqueciPage]
})
export class EsqueciPageModule {}
