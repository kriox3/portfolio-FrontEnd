import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../models/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  URL = 'https://kriox3-back-portfolio.herokuapp.com/habilidades/';

  constructor(private http: HttpClient) { }

  
  public getHabilidad(): Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(this.URL + 'traer');
  }

  
  public addHabilidad(habilidad: Habilidad): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', habilidad);
  }

 
  public updateHabilidad(id: number, habilidad: Habilidad): Observable<any> {
    return this.http.put<any>(this.URL + `editar/${id}?id=${id}&nombre=${habilidad.nombre}&porcentaje=${habilidad.porcentaje}`, habilidad);
  }

  
  public deleteHabilidad(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }
}