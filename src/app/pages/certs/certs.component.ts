import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Certificacion } from 'src/app/models/certificacion';
import { CertificacionService } from 'src/app/serv/certificacion.service';
import { TokenService } from 'src/app/serv/token.service';

@Component({
  selector: 'app-certs',
  templateUrl: './certs.component.html',
  styleUrls: ['./certs.component.css']
})
export class CertsComponent implements OnInit {

  listaCerts: Certificacion[] = [];
  modifica = false;
  isLogged = false;

  constructor(private certificacionService: CertificacionService,
    private tokenService: TokenService,
    private app: AppComponent) { }

  ngOnInit(): void {
    this.cargarCerts();
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

  public cargarCerts(): void {
    this.certificacionService.getCertificacion().subscribe(data => {
      this.listaCerts = data;
    })
  }

  reloadME(): void {
    window.location.reload();
  }

}
