import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsqueciPage } from './esqueci.page';

const routes: Routes = [
  {
    path: '',
    component: EsqueciPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsqueciPageRoutingModule {}
