import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarNfsePageRoutingModule } from './cadastrar-nfse-routing.module';

import { CadastrarNfsePage } from './cadastrar-nfse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarNfsePageRoutingModule
  ],
  declarations: [CadastrarNfsePage]
})
export class CadastrarNfsePageModule {}
