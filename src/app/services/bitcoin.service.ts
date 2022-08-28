import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http:HttpClient) { }

  getRate(coins: number) {
    return this.http.get<number>(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    .pipe(map(res => res))
  }
}
