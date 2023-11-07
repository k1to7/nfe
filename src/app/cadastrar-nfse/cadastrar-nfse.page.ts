import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

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


  public descricaoItem1: string = '';
  public quantidadeItem1: number= 1;
  public precoUnitarioItem1: number= 0;
 


  constructor() { }

  ngOnInit() {
  }
  
  totalItem1(){
    return this.quantidadeItem1 * this.precoUnitarioItem1;
  }
  emitirNotaFiscal(){}

  Add(){}
  
}



