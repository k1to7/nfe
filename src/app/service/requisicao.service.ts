import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  constructor(
    public http:HttpClient
  ) { }

  get(dados:any){
    return this.http.get('http://localhost/miles/',{
      params:dados
    });
  }

  post(formData:any){
    const httpOptions ={
     headers: new HttpHeaders({
      'Access-Control-Allow-Origin' : '*'
     })
    };
    return this.http.post('/requisicao', formData, httpOptions);
  }
}
