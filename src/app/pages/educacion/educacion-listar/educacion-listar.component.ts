import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/serv/educacion.service';
import { TokenService } from 'src/app/serv/token.service';
import { EducacionComponent } from '../educacion.component';

@Component({
  selector: 'app-educacion-listar',
  templateUrl: './educacion-listar.component.html',
  styleUrls: ['./educacion-listar.component.css']
})
export class EducacionListarComponent implements OnInit {

  id?: number;
  establecimiento: string = '';
  titulo: string = '';
  fecha: string = '';
  completado: boolean = false;  

  educacion: Educacion = new Educacion("", "", "", false, 0);
  educacionLista: Educacion[] = [];

  constructor(private educacionService: EducacionService,
    private tokenService: TokenService,
    private router: Router,
    private educacionComponente: EducacionComponent, 
    private app: AppComponent) { }

  isLogged = false;
  educacionModalOn = false;
  educacionNewModalOn = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public cargarEducacion(): void {
    this.educacionService.getEducacion().subscribe(data => {
      this.educacionLista = data;
    })
  }

  onDeleteEducacion(id?: number) {
    this.app.domSpinner(true);
    if (id != undefined) {
      this.educacionService.deleteEducacion(id)
        .subscribe(data => { }, err => {
          let er = alert(JSON.stringify(err.error.text));
          this.educacionComponente.reloadME();
          this.app.domSpinner(false);
        }
        );
    }
  }

  onUpdateEdu(id?: number) {
    this.app.domSpinner(true);
    let cont = this.educacionLista.find(x => x.id == id);
    /* const cont = new Educacion(this.accesoUrl, this.persona, this.red, this.id); */
    if (id != undefined && cont != undefined) {
      this.educacionService.updateEducacion(id, cont).subscribe(
        data => {
          this.cargarEducacion();
          let a = alert("Modificada la educacion");
          this.educacionComponente.reloadME();
          this.app.domSpinner(false);
        }
      )
    }
  }

  onModal() {
    this.educacionModalOn = true;
  }
  onModalOff() {
    this.educacionModalOn = false;
  }

  /////////////////////////////////////////////

  onNewModal() {
    this.educacionNewModalOn = true;
  }


}
