import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = environment.servidor+'/educaciones/';

  constructor(private http: HttpClient) { }

  
  public getEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.URL + 'traer');
  }

  
  public addEducacion(educacion: Educacion): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', educacion);
  }

 
  public updateEducacion(id: number, educacion: Educacion): Observable<any> {
    return this.http.put<any>(this.URL + `editar/${id}?id=${id}&establecimiento=${educacion.establecimiento}&titulo=${educacion.titulo}&fecha=${educacion.fecha}&completado=${educacion.completado}`, educacion);
  }

  
  public deleteEducacion(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }
}