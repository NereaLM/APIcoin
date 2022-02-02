import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CriptoService {
  _url = "https://data.messari.io/api/v1/assets/bitcoin/metrics"
 url = ""

  constructor(
    private http:HttpClient
    ) { 
    console.log('Servicio cripto')
  }


  getCripto(){
    let heades = new HttpHeaders()
    .set('Type-content', 'aplication/json')

     return this.http.get( this._url, {
       headers: heades
     });
  }
}



