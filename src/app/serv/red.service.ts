import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Red } from '../models/red';

@Injectable({
  providedIn: 'root'
})
export class RedService {

  URL = environment.servidor + '/redes/';

  constructor(private http: HttpClient) { }


  public getRedes(): Observable<Red[]> {
    return this.http.get<Red[]>(this.URL + 'traer');
  }


  public addRedes(red: Red): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', red);
  }


  public updateRedeso(id: number, red: Red): Observable<any> {
    return this.http.put<any>(this.URL + `editar/${id}?id=${id}&red=${red.red}`, red);
  }


  public deleteRedes(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }





}