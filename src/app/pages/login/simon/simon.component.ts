import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Roles } from 'src/app/models/roles';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/serv/auth.service';
import { TokenService } from 'src/app/serv/token.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.css']
})
export class SimonComponent implements OnInit {
  listaSimon: Usuario[] = [];
  modifica = false;

  constructor(private router: Router,
    private authService: AuthService,
    private tokenService: TokenService,
    private app: AppComponent) { }

  ngOnInit(): void {
    let tk = prompt("Token:", '');
    if (tk !== environment.tk) {
      this.router.navigate(['/login']);
      alert("Simon dice: muere");
    } else {
      this.modifica = true;
    }

    this.cargarEducacion();
    this.app.domSpinner(false);

  }

  public cargarEducacion(): void {
    this.authService.getUsers().subscribe(data => {
      this.listaSimon = data;
    })
  }

  reloadME(): void {
    window.location.reload();
  }


}
