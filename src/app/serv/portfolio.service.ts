import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Portfolio } from '../models/portfolio';

const cabecera = {headers: new HttpHeaders({'Content-TYpe': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  portfolioURL = 'https://kriox3-back-portfolio.herokuapp.com/portfolio/datos';

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Portfolio[]> {
    return this.httpClient.get<Portfolio[]>(this.portfolioURL, cabecera);
  }
}