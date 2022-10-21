import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AboutMe } from 'src/app/models/about-me';
import { Contacto } from 'src/app/models/contacto';
import { Red } from 'src/app/models/red';
import { ContactoService } from 'src/app/serv/contacto.service';
import { ContactoListarComponent } from '../contacto-listar/contacto-listar.component';
import { ContactoComponent } from '../contacto.component';

@Component({
  selector: 'app-contacto-nuevo',
  templateUrl: './contacto-nuevo.component.html',
  styleUrls: ['./contacto-nuevo.component.css']
})
export class ContactoNuevoComponent implements OnInit {

  @Input() redes: any;

  id?: number;
  accesoUrl: string = '';
  persona: AboutMe = new AboutMe("","","","","",0);
  red: Red = new Red("", 1);

  newModalOn = false;

  constructor(private contactoService: ContactoService,
    private contComp: ContactoListarComponent,
    private router: Router,
    private contactoComponente: ContactoComponent, 
    private app: AppComponent) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.app.domSpinner(true);
    const cont = new Contacto(this.accesoUrl, this.persona, this.red, this.id);
    this.contactoService.addContacto(cont).subscribe(data=>{

    }, err =>{
      let er = alert(JSON.stringify(err.error.text));
      this.contactoComponente.reloadME();
      this.app.domSpinner(false);
    }
    )
  }

  onNewModal() {
    this.newModalOn = true;
  }

  onNewModalOff() {
    this.newModalOn = false;
  }

}
