import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { RequisicaoService } from '../service/requisicao.service';

@Component({
  selector: 'app-cadastrar-nfse',
  templateUrl: './cadastrar-nfse.page.html',
  styleUrls: ['./cadastrar-nfse.page.scss'],
})
export class CadastrarNfsePage implements OnInit {
  public dataHoraEmissao: string='';
  public numeroNota:number = 0;
  public emitenteNome: string= '';
  public destinatarioNome: string= '';
  public cpnj: number= 0;
  public cidade: string= '';
  public uf: string = '';
  public datahora:string ='';
  public endereco:string= '';
  public municipio:string='';
  public inscricaomunicipal:string='';
  public rns:string='';
  public discriminacao:string = '';
  public texto: string= '';
  public email: string='';

  public inss:number = 0;
  public irrf:number = 0;
  public cssl:number= 0;
  public confins:number= 0;
  public pis_pasep:number= 0;
  public codigo_serviço:number= 0;
  public total_deduçoes:number= 0;
  public base_calculo: number = 0;
  public aliquota:number= 0;
  public valor_iss:number= 0;
  public credito:number = 0;
  public municipio_prestacao_serviço:string ='';
  

  public descricaoItem1: string = '';
  public quantidadeItem1: number= 1;
  public precoUnitarioItem1: number= 0;
 


  constructor(
    public requisicao_service:RequisicaoService
  ) { }

  ngOnInit() {
  }
  
  totalItem1(){
    return this.quantidadeItem1 * this.precoUnitarioItem1;
  }
  emitirNotaFiscal(){}

  Add(){

  }
  
  emitirNota(){
    const fd = new FormData();
    fd.append('controller','nfse');
    fd.append('datahora',String(this.dataHoraEmissao));
    fd.append('numero_nota',String(this.numeroNota));

    this.requisicao_service
    .post(fd)
    .subscribe(
      () => {
        
      }      
    );
  }
}



