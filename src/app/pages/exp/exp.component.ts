import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/serv/experiencia.service';
import { TokenService } from 'src/app/serv/token.service';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {

  listaExp: Experiencia[] = [];
  modifica = false;
  isLogged = false;

  constructor(private expService: ExperienciaService,
    private tokenService: TokenService,
    private app: AppComponent) { }

  ngOnInit(): void {
    this.cargarExp();
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

  public cargarExp(): void {
    this.expService.getExperiencia().subscribe(data => {
      this.listaExp = data;
    })
  }

  reloadME(): void {
    window.location.reload();
  }

}
