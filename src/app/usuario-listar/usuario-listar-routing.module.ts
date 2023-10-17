import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequisicaoService } from '../service/requisicao.service';
import { UsuarioListarPage } from './usuario-listar.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioListarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioListarPageRoutingModule {}
