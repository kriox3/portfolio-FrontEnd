import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/serv/proyecto.service';
import { TokenService } from 'src/app/serv/token.service';

@Component({
  selector: 'app-projs',
  templateUrl: './projs.component.html',
  styleUrls: ['./projs.component.css']
})
export class ProjsComponent implements OnInit {
  listaProj: Proyecto[] = [];
  modifica = false;
  isLogged = false;

  constructor(private expService: ProyectoService,
    private tokenService: TokenService,
    private app: AppComponent) { }

  ngOnInit(): void {
    this.cargarProj();
    this.app.domSpinner(false);

    if (this.tokenService.getAuthorities().includes('ROLE_ADMIN')) {
      this.modifica = true;
    }
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public cargarProj(): void {
    this.expService.getProyecto().subscribe(data => {
      this.listaProj = data;
    })
  }

  reloadME(): void {
    window.location.reload();
  }

  onNavigate(web:any){
    window.open(web, "_blank");
}
}
