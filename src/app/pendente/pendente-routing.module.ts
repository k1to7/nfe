import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendentePage } from './pendente.page';

const routes: Routes = [
  {
    path: '',
    component: PendentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendentePageRoutingModule {}
