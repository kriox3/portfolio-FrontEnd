import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL = 'https://kriox3-back-portfolio.herokuapp.com/experiencia/';

  constructor(private http: HttpClient) { }

  
  public getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.URL + 'traer');
  }

  
  public addExperiencia(experiencia: Experiencia): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', experiencia);
  }

 
  public updateExperiencia(id: number, experiencia: Experiencia): Observable<any> {
    return this.http.put<any>(this.URL + `editar/${id}?id=${id}&establecimiento=${experiencia.establecimiento}&ocupacion=${experiencia.ocupacion}&desde=${experiencia.desde}&hasta=${experiencia.hasta}&actual=${experiencia.actual}`, experiencia);
  }

  
  public deleteExperiencia(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }
}