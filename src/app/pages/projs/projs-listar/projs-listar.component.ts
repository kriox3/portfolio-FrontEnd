import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/serv/proyecto.service';
import { TokenService } from 'src/app/serv/token.service';
import { ProjsComponent } from '../projs.component';

@Component({
  selector: 'app-projs-listar',
  templateUrl: './projs-listar.component.html',
  styleUrls: ['./projs-listar.component.css']
})
export class ProjsListarComponent implements OnInit {

  id?: number;
  nombre: string = '';
  informacion: string = '';
  fecha: string = '';
  accesoUrl: string = '';

  proyecto: Proyecto = new Proyecto("", "", "", "", 0);
  proyectoLista: Proyecto[] = [];

  constructor(private proyectoService: ProyectoService,
    private tokenService: TokenService,
    private router: Router,
    private projsComponente: ProjsComponent, 
    private app: AppComponent) { }

  isLogged = false;
  proyectoModalOn = false;
  proyectoNewModalOn = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public cargarProyecto(): void {
    this.proyectoService.getProyecto().subscribe(data => {
      this.proyectoLista = data;
    })
  }

  onDeleteProyecto(id?: number) {
    this.app.domSpinner(true);
    if (id != undefined) {
      this.proyectoService.deleteProyecto(id)
        .subscribe(data => { }, err => {
          let er = alert(JSON.stringify(err.error.text));
          this.projsComponente.reloadME();
          this.app.domSpinner(false);
        }
        );
    }
  }

  onUpdateProj(id?: number) {
    this.app.domSpinner(true);
    let cont = this.proyectoLista.find(x => x.id == id);
    /* const cont = new Proyecto(this.accesoUrl, this.persona, this.red, this.id); */
    if (id != undefined && cont != undefined) {
      this.proyectoService.updateProyecto(id, cont).subscribe(
        data => {
          this.cargarProyecto();
          let a = alert("Modificada la proyecto");
          this.projsComponente.reloadME();
          this.app.domSpinner(false);
        }
      )
    }
  }

  onModal() {
    this.proyectoModalOn = true;
  }
  onModalOff() {
    this.proyectoModalOn = false;
  }

  /////////////////////////////////////////////

  onNewModal() {
    this.proyectoNewModalOn = true;
  }

}
