import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequisicaoService } from '../service/requisicao.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: 'cadastro.page.html',
  styleUrls: ['cadastro.page.scss'],
})
export class CadastroPage {
  public id: number = 0;
  public nome: string = "" ;
  public login: string = "";
  public senha: string ="";
  navCtrl: any;

  constructor(private http: HttpClient,
    public requisicao_service:RequisicaoService,
    private  LoadingController: LoadingController,
    private activated_route: ActivatedRoute,
  
    ) {
     /* this.activated_route.params
      .subscribe(
        (params:any) => {
          this.id = params.id == undefined? 0 : params.id;
          this.requisicao_service.get({
            controller:'usuario-get',
            id:this.id
          })
          .subscribe(
            (_dados:any) =>{
              //this.nome = _dados.nome;
              //this.login = _dados.login;
            }
        );
        }
      );*/
    }


  //async 
  salvar(){
    this.navCtrl.navigateForward('home-page');
    
    //const loading = await this.LoadingController.create({
      //message: 'Salvando...',
    //});

    //await loading.present();    

    //const fd = new FormData();
    //fd.append('controller','usuario');
    //fd.append('id',String(this.id));
    //fd.append('nome',this.nome);
    //fd.append('login',this.login);
   // fd.append('senha',this.senha);

    //this.requisicao_service
    //.post(fd)
    //.subscribe(
      //async () => {
      //  await loading.dismiss();
    //  }      
    //);

    

  //}
  
}
}
