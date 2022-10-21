import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AboutMe } from 'src/app/models/about-me';
import { Contacto } from 'src/app/models/contacto';
import { Red } from 'src/app/models/red';
import { ContactoService } from 'src/app/serv/contacto.service';
import { RedService } from 'src/app/serv/red.service';
import { TokenService } from 'src/app/serv/token.service';
import { ContactoComponent } from '../contacto.component';

@Component({
  selector: 'app-contacto-listar',
  templateUrl: './contacto-listar.component.html',
  styleUrls: ['./contacto-listar.component.css']
})
export class ContactoListarComponent implements OnInit {

  modifica = false;
  id?: number;
  accesoUrl: string = '';
  persona: AboutMe = new AboutMe("", "", "", "", "", 0);
  red: Red = new Red("", 1);

  contacto: Contacto = new Contacto("", this.persona, this.red, 0);
  contactoLista: Contacto[] = [];
  redesLista: Red[] = [];

  constructor(private contactoService: ContactoService,
    private redService: RedService,
    private tokenService: TokenService,
    private router: Router,
    private contactoComponente: ContactoComponent, 
    private app: AppComponent) { }

  isLogged = false;
  modalOn = false;
  newModalOn = false;

  ngOnInit(): void {
    this.cargarContacto();
    if (this.tokenService.getAuthorities().includes('ROLE_ADMIN')) {
      this.modifica = true;
    }
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public cargarContacto(): void {
    this.cargarRedes();
    this.contactoService.getContacto().subscribe(data => {
      this.contactoLista = data;
    })
  }

  public cargarRedes(): void {
    this.redService.getRedes().subscribe(data => {
      this.redesLista = data;
    })
  }

  onDeleteContacto(id?: number) {
    this.app.domSpinner(true);
    if (id != undefined) {
      this.contactoService.deleteContacto(id)
        .subscribe(data => { }, err => {
          let er = alert(JSON.stringify(err.error.text));
          this.contactoComponente.reloadME();
          this.app.domSpinner(false);
        }
        );
    }
  }

  onUpdateCon(id?: number) {
    this.app.domSpinner(true);
    let cont = this.contactoLista.find(x => x.id == id);
    /* const cont = new Contacto(this.accesoUrl, this.persona, this.red, this.id); */
    if (id != undefined && cont != undefined) {
      this.contactoService.updateContacto(id, cont).subscribe(
        data => {
          this.cargarContacto();
          let a = alert("Modificada la red");
          this.contactoComponente.reloadME();
          this.app.domSpinner(false);
        }
      )
    }
  }

  onModal() {
    this.modalOn = true;
  }
  onModalOff() {
    this.modalOn = false;
  }

  /////////////////////////////////////////////

  onNewModal() {
    this.newModalOn = true;
  }


}
