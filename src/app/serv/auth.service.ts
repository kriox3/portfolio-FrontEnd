import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { JwtDto } from '../models/jwt-dto';
import { LoginUsuario } from '../models/login-usuario';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = environment.servidor+'/api/auth/';
  CurrentUserSubject: BehaviorSubject<any>;

  constructor(private httpClient: HttpClient) {
    this.CurrentUserSubject= new BehaviorSubject<any>(JSON.stringify(sessionStorage || '{}'));
  }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'vive', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
  }

  public deleteUser(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.authURL + `muere/${id}`);
  }

  public getUsers(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.authURL + 'quienes');
  }

  get UsuarioAutenticado(){
    return this.CurrentUserSubject.value;
  }
}