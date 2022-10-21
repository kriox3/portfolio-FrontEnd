import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/serv/experiencia.service';
import { TokenService } from 'src/app/serv/token.service';
import { ExpComponent } from '../exp.component';

@Component({
  selector: 'app-exp-listar',
  templateUrl: './exp-listar.component.html',
  styleUrls: ['./exp-listar.component.css']
})
export class ExpListarComponent implements OnInit {

  id?: number;
  establecimiento: string = '';
  ocupacion: string = '';
  desde: string = '';
  hasta: string = '';
  actual: boolean = false;

  experiencia: Experiencia = new Experiencia("", "", "", "", false, 0);
  experienciaLista: Experiencia[] = [];

  constructor(private experienciaService: ExperienciaService,
    private tokenService: TokenService,
    private router: Router,
    private expComponente: ExpComponent, 
    private app: AppComponent) { }

  isLogged = false;
  experienciaModalOn = false;
  experienciaNewModalOn = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public cargarExperiencia(): void {
    this.experienciaService.getExperiencia().subscribe(data => {
      this.experienciaLista = data;
    })
  }

  onDeleteExperiencia(id?: number) {
    this.app.domSpinner(true);
    if (id != undefined) {
      this.experienciaService.deleteExperiencia(id)
        .subscribe(data => { }, err => {
          let er = alert(JSON.stringify(err.error.text));
          this.expComponente.reloadME();
          this.app.domSpinner(false);
        }
        );
    }
  }

  onUpdateCert(id?: number) {
    this.app.domSpinner(true);
    let cont = this.experienciaLista.find(x => x.id == id);
    /* const cont = new Experiencia(this.accesoUrl, this.persona, this.red, this.id); */
    if (id != undefined && cont != undefined) {
      this.experienciaService.updateExperiencia(id, cont).subscribe(
        data => {
          this.cargarExperiencia();
          let a = alert("Modificada la experiencia");
          this.expComponente.reloadME();
          this.app.domSpinner(false);
        }
      )
    }
  }

  onModal() {
    this.experienciaModalOn = true;
  }
  onModalOff() {
    this.experienciaModalOn = false;
  }

  /////////////////////////////////////////////

  onNewModal() {
    this.experienciaNewModalOn = true;
  }


}
