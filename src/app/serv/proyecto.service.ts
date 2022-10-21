import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  URL = 'https://kriox3-back-portfolio.herokuapp.com/proyectos/';

  constructor(private http: HttpClient) { }

  
  public getProyecto(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.URL + 'traer');
  }

  
  public addProyecto(proyecto: Proyecto): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', proyecto);
  }

 
  public updateProyecto(id: number, proyecto: Proyecto): Observable<any> {
    return this.http.put<any>(this.URL + `editar/${id}?id=${id}&nombre=${proyecto.nombre}&informacion=${proyecto.informacion}&fecha=${proyecto.fecha}&accesoUrl=${proyecto.accesoUrl}`, proyecto);
  }

  
  public deleteProyecto(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }
}