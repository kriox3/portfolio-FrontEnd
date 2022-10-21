import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/serv/experiencia.service';
import { ExpListarComponent } from '../exp-listar/exp-listar.component';
import { ExpComponent } from '../exp.component';

@Component({
  selector: 'app-exp-nuevo',
  templateUrl: './exp-nuevo.component.html',
  styleUrls: ['./exp-nuevo.component.css']
})
export class ExpNuevoComponent implements OnInit {

  id?: number;
  establecimiento: string = '';
  ocupacion: string = '';
  desde: string = '';
  hasta: string = '';
  actual: boolean = false;

  experienciaNewModalOn = false;

  constructor(private experienciaService: ExperienciaService,
    private certComp: ExpListarComponent,
    private router: Router,
    private experienciaComponente: ExpComponent, 
    private app: AppComponent) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.app.domSpinner(true);
    const cont = new Experiencia(this.establecimiento, this.ocupacion, this.desde, this.hasta, this.actual, this.id);
    this.experienciaService.addExperiencia(cont).subscribe(data => {

    }, err => {
      let er = alert(JSON.stringify(err.error.text));
      this.experienciaComponente.reloadME();
      this.app.domSpinner(false);
    }
    )
  }

  onNewModal() {
    this.experienciaNewModalOn = true;
  }

  onNewModalOff() {
    this.experienciaNewModalOn = false;
  }

}
