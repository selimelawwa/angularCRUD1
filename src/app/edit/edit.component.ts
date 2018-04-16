// edit.component.ts

import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoinService } from './../coin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Coin } from '../coin';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() coin: Coin;
  angForm: FormGroup;
  title = 'Edit Coin';

  constructor(private route: ActivatedRoute, private router: Router, private service: CoinService, private fb: FormBuilder) {
    this.createForm();
    //set to empty object before obserable is loaded to avoide undefined error in view
    if(!this.coin){
      this.coin=new Coin();
    }
  }

  ngOnInit() {
    this.getCoin();
  }


  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  
  getCoin() {
    this.route.params.subscribe(params => {
      this.service.getCoin(params['id']).subscribe(res => {
        this.coin = res;
      });
    });
  }

  updateCoin(coin: Coin) {

    this.service.updateCoin(coin).subscribe(res => {
      console.log('Done'),
        this.router.navigate(['/index']);
    });

  }

  deleteCoin(coin: Coin) {
    this.service.deleteCoin(coin).subscribe(res => {
      console.log('Deleted'),
      this.router.navigate(['/index']);
    });
  }

}