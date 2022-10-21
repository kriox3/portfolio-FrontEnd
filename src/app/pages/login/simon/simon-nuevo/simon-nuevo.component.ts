import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { Roles } from 'src/app/models/roles';
import { AuthService } from 'src/app/serv/auth.service';
import { SimonComponent } from '../simon.component';

@Component({
  selector: 'app-simon-nuevo',
  templateUrl: './simon-nuevo.component.html',
  styleUrls: ['./simon-nuevo.component.css']
})
export class SimonNuevoComponent implements OnInit {

  id?: number;
  nombre: string = "";
  nombreUsuario: string = "";
  email: string = "";
  password: string = "";
  rol: string[] = [];
  roles: string[] = [];

  usersNewModalOn = false;

  constructor(private authService: AuthService,
    private router: Router,
    private simonComponente: SimonComponent,
    private app: AppComponent) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.app.domSpinner(true);
    if (this.rol.toString() == "admin") {
      this.roles.push("admin");
    }
    this.roles.push("user");
    const cont = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password, this.roles, this.id);
    this.authService.nuevo(cont).subscribe(data => {
      let er = alert("Usuario Creado Correctamente");
      this.simonComponente.reloadME();
      this.app.domSpinner(false);

    }, err => {
      let er = alert(JSON.stringify(err.error.text));
      this.simonComponente.reloadME();
      this.app.domSpinner(false);
    }
    )
  }

  onNewModal() {
    this.usersNewModalOn = true;
  }

  onNewModalOff() {
    this.usersNewModalOn = false;
  }

}
