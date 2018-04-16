// create.component.ts

import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Coin } from '../coin';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  coin: Coin;
  title = 'Add Coin';
  angForm: FormGroup;
  constructor(private coinservice: CoinService, private fb: FormBuilder, private router: Router) {
    this.createForm();
  }
  ngOnInit() {
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  addCoin(name, price) {
    this.coin = new Coin();
    this.coin.name = name;
    this.coin.price = price;
    this.coinservice.addCoin(this.coin).subscribe(res => {
      console.log('Done'),
        this.router.navigate(['/index']);
    });
  }


}