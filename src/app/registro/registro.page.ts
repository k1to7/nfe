import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequisicaoService } from '../service/requisicao.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public id: number = 0;
  public nome: string = "" ;
  public email: string = "";
  public senha: string = "";
  public cpfcnpj: number= 0;
  public número: number= 0;
  public razaosocial: string= '';

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
  ngOnInit(): void {
    ('Method not implemented.');
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
