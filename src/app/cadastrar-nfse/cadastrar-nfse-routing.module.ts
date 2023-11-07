import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarNfsePage } from './cadastrar-nfse.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarNfsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarNfsePageRoutingModule {}
