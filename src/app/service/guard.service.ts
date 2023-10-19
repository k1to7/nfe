import { Injectable } from '@angular/core';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';

import { Observable, Subject } from 'rxjs';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {
  private is_logged:Subject<boolean | UrlTree> = new Subject();
    constructor(
      public auth_service:AutenticacaoService,
      public router: Router
    ) { 
      this.isLogged();
    
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    stage: RouterStateSnapshot
  ):| Observable<boolean | UrlTree >
  |Promise<boolean | UrlTree>
  |boolean
  |UrlTree{
    return this.is_logged;
  }

  isLogged(){
    let _token = sessionStorage.getItem('token');
    if(_token == '' || _token == null || _token == undefined){
      this.goLogin();
    }else{
      this.auth_service.validarToken(_token)
      .subscribe(
        (_res:any)=> {
          if (_res){
            this.is_logged.next(true);
          }else{
            this.goLogin();
          }
        }
      );
    }
  }

  goLogin(){
    this.router.navigateByUrl('/autenticacao');
  }

}

