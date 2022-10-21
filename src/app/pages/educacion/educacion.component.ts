import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/serv/educacion.service';
import { PortfolioService } from 'src/app/serv/portfolio.service';
import { TokenService } from 'src/app/serv/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  listaEducacion: Educacion[] = [];
  modifica= false;
  isLogged = false;

  constructor(private educacionService: EducacionService,
    private tokenService: TokenService,
    private app: AppComponent) { }

  ngOnInit(): void {
    this.cargarEducacion();
    this.app.domSpinner(false);

    if (this.tokenService.getAuthorities().includes('ROLE_ADMIN')){
      this.modifica = true;
    }
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public cargarEducacion(): void {
    this.educacionService.getEducacion().subscribe(data => {
      this.listaEducacion = data;
    })
  }

  reloadME(): void {
    window.location.reload();
  }



}
