import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Coin } from '../coin'
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  coin: Coin;
  
  constructor(private route: ActivatedRoute, private router: Router, private service: CoinService) { 
    if (!this.coin) {
      this.coin = new Coin();
    }
  }

  ngOnInit() {
    this.getCoin();
  }

  getCoin(): void{
    this.route.params.subscribe(params => {
      this.service.getCoin(params['id']).subscribe(res => {
        this.coin = res;
      });
    });
  }

}
