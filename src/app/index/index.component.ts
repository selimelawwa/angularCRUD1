import { CoinService } from './../coin.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Coin } from '../coin';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  coins: Coin[];

  constructor(private http: HttpClient, private service: CoinService) { }

  ngOnInit() {
    this.getCoins();
  }
  
  getCoins() {
    this.service.getCoins().subscribe(coins => {
      this.coins = coins;
    });
  }
  
  deleteCoin(coin: Coin) {
    this.service.deleteCoin(coin).subscribe(res => { 
      console.log('Deleted', coin.name), 
      this.coins = this.coins.filter(c => c !== coin);  }
    );
  }
}
