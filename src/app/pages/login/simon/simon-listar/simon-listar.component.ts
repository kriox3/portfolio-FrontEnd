import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Roles } from 'src/app/models/roles';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/serv/auth.service';
import { SimonComponent } from '../simon.component';

@Component({
  selector: 'app-simon-listar',
  templateUrl: './simon-listar.component.html',
  styleUrls: ['./simon-listar.component.css']
})
export class SimonListarComponent implements OnInit {

  id?: number;
  email: string  = '';
  nombre: string  = '';
  nombreUsuario: string  = '';
  password: string  = '';
  roles?: string;

  usuarioLista: Usuario[] = [];

  constructor(private authService: AuthService,
    private router: Router,
    private simonComponente: SimonComponent,
    private app: AppComponent) { }

  isLogged = false;
  simonModalOn = false;
  simonNewModalOn = false;

  ngOnInit(): void {
    this.cargarUsers();
  }

  public cargarUsers(): void {
    this.authService.getUsers().subscribe(data => {
      this.usuarioLista = data;
    })
  }

  onDeleteUser(id?: number) {
    this.app.domSpinner(true);
    if (id != undefined) {
      this.authService.deleteUser(id)
        .subscribe(data => { }, err => {
          let er = alert(JSON.stringify(err.error.text));
          this.simonComponente.reloadME();
          this.app.domSpinner(false);
        }
        );
    }
  }

  onModal() {
    this.simonModalOn = true;
  }
  onModalOff() {
    this.simonModalOn = false;
  }

  /////////////////////////////////////////////

  onNewModal() {
    this.simonNewModalOn = true;
  }

}
