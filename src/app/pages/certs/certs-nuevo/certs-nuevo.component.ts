import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Certificacion } from 'src/app/models/certificacion';
import { CertificacionService } from 'src/app/serv/certificacion.service';
import { CertsListarComponent } from '../certs-listar/certs-listar.component';
import { CertsComponent } from '../certs.component';

@Component({
  selector: 'app-certs-nuevo',
  templateUrl: './certs-nuevo.component.html',
  styleUrls: ['./certs-nuevo.component.css']
})
export class CertsNuevoComponent implements OnInit {

  id?: number;
  establecimiento: string = '';
  titulo: string = '';
  fecha: string = '';
  completado: boolean = false;  

  certificacionNewModalOn = false;

  constructor(private certificacionService: CertificacionService,
    private certComp: CertsListarComponent,
    private router: Router,
    private certificacionComponente: CertsComponent) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const cont = new Certificacion(this.establecimiento, this.titulo, this.fecha, this.completado, this.id);
    this.certificacionService.addCertificacion(cont).subscribe(data=>{

    }, err =>{
      let er = alert(JSON.stringify(err.error.text));
      this.certificacionComponente.reloadME();
            
    }
    )
  }

  onNewModal() {
    this.certificacionNewModalOn = true;
  }

  onNewModalOff() {
    this.certificacionNewModalOn = false;
  }

}
