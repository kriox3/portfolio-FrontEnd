import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Habilidad } from 'src/app/models/habilidad';
import { HabilidadService } from 'src/app/serv/habilidad.service';
import { TokenService } from 'src/app/serv/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  listaHabilidad: Habilidad[] = [];
  modifica= false;
  isLogged = false;

  constructor(private habilidadService: HabilidadService,
    private tokenService: TokenService,
    private app: AppComponent) { }

  ngOnInit(): void {
    this.cargarHabilidad();
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

  public cargarHabilidad(): void {
    this.habilidadService.getHabilidad().subscribe(data => {
      this.listaHabilidad = data;
    })
  }

  reloadME(): void {
    window.location.reload();
  }
}
