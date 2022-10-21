import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certificacion } from 'src/app/models/certificacion';
import { CertificacionService } from 'src/app/serv/certificacion.service';
import { TokenService } from 'src/app/serv/token.service';
import { CertsComponent } from '../certs.component';

@Component({
  selector: 'app-certs-listar',
  templateUrl: './certs-listar.component.html',
  styleUrls: ['./certs-listar.component.css']
})
export class CertsListarComponent implements OnInit {

  id?: number;
  establecimiento: string = '';
  titulo: string = '';
  fecha: string = '';
  completado: boolean = false;

  certificacion: Certificacion = new Certificacion("", "", "", false, 0);
  certificacionLista: Certificacion[] = [];

  constructor(private certificacionService: CertificacionService,
    private tokenService: TokenService,
    private router: Router,
    private certsComponente: CertsComponent) { }

  isLogged = false;
  certificacionModalOn = false;
  certificacionNewModalOn = false;

  ngOnInit(): void {
    this.cargarCertificacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public cargarCertificacion(): void {
    this.certificacionService.getCertificacion().subscribe(data => {
      this.certificacionLista = data;
    })
  }

  onDeleteCertificacion(id?: number) {
    if (id != undefined) {
      this.certificacionService.deleteCertificacion(id)
        .subscribe(data => { }, err => {
          let er = alert(JSON.stringify(err.error.text));
          this.certsComponente.reloadME();

        }
        );
    }
  }

  onUpdateCert(id?: number) {
    let cont = this.certificacionLista.find(x => x.id == id);
    /* const cont = new Certificacion(this.accesoUrl, this.persona, this.red, this.id); */
    if (id != undefined && cont != undefined) {
      this.certificacionService.updateCertificacion(id, cont).subscribe(
        data => {
          this.cargarCertificacion();
          let a = alert("Modificada la certificacion");
          this.certsComponente.reloadME();
        }
      )
    }
  }

  onModal() {
    this.certificacionModalOn = true;
  }
  onModalOff() {
    this.certificacionModalOn = false;
  }

  /////////////////////////////////////////////

  onNewModal() {
    this.certificacionNewModalOn = true;
  }

}
