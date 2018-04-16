import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Coin } from './coin';

@Injectable()
export class CoinService {

  
  constructor(private http: HttpClient, private router: Router) { }
  //Create
  addCoin(coin: Coin): Observable<Coin> {
    const uri = 'http://localhost:4000/coins/add';
    return this.http.post<Coin>(uri, coin)
  }
  //Read -Get all coins
  getCoins(): Observable<Coin[]> {
    const uri = 'http://localhost:4000/coins';
    return this.http.get<Coin[]>(uri);
  }
  //Get Single coin
  getCoin(id): Observable<Coin>{
    const uri = 'http://localhost:4000/coins/' + id;
    return this.http.get<Coin>(uri);
  }
  //update coin
  updateCoin(coin: Coin): Observable<any> {
    const uri = 'http://localhost:4000/coins/update/' + coin._id;

    return this.http.put(uri, coin);
  }
  //delete coin
  deleteCoin(coin: Coin): Observable<Coin> {
    const uri = 'http://localhost:4000/coins/' + coin._id;
    
    return this.http.delete<Coin>(uri);
  }
  // deleteCoin(coin: Coin) {
  //   const uri = 'http://localhost:4000/coins/delete/' + coin._id;

  //   return this.http.get(uri).map(res => {
  //     return res;
  //   });
  // }
  // editCoin(id): Observable<Coin>  {
  //   const uri = 'http://localhost:4000/coins/edit/' + id;
  //   return this.http.get<Coin>(uri);
  // }

}