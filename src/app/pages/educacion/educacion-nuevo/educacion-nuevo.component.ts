import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/serv/educacion.service';
import { EducacionListarComponent } from '../educacion-listar/educacion-listar.component';
import { EducacionComponent } from '../educacion.component';

@Component({
  selector: 'app-educacion-nuevo',
  templateUrl: './educacion-nuevo.component.html',
  styleUrls: ['./educacion-nuevo.component.css']
})
export class EducacionNuevoComponent implements OnInit {

  id?: number;
  establecimiento: string = '';
  titulo: string = '';
  fecha: string = '';
  completado: boolean = false;  

  educacionNewModalOn = false;

  constructor(private educacionService: EducacionService,
    private router: Router,
    private educacionComponente: EducacionComponent, 
    private app: AppComponent) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.app.domSpinner(true);
    const cont = new Educacion(this.establecimiento, this.titulo, this.fecha, this.completado, this.id);
    this.educacionService.addEducacion(cont).subscribe(data=>{

    }, err =>{
      let er = alert(JSON.stringify(err.error.text));
      this.educacionComponente.reloadME();
      this.app.domSpinner(false);
    }
    )
  }

  onNewModal() {
    this.educacionNewModalOn = true;
  }

  onNewModalOff() {
    this.educacionNewModalOn = false;
  }

}
