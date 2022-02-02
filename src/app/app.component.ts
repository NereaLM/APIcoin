import { CoinService } from './services/coin.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'criptoApp';
  public criptos: any;

  constructor(private CoinService:CoinService){

    this.CoinService.getCripto().subscribe((resp: any)=> {
      console.log('respuesta completa', resp)
      this.criptos = resp.data
      console.log(this.criptos)
      console.log(this.criptos.name)
    })
  }

}