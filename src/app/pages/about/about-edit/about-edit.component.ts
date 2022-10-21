import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AboutMe } from 'src/app/models/about-me';
import { AboutMeService } from 'src/app/serv/aboutme.service';
import { AboutComponent } from '../about.component';

@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.css']
})
export class AboutEditComponent implements OnInit {


  isLogged = false;
  /*  aboutMe: AboutMe = new AboutMe(); */
  aboutMe: AboutMe = new AboutMe("", "", "", "", "", 0);

  constructor(
    private aboutMeService: AboutMeService,
    private router: Router,
    private appComp: AppComponent,
    private aboutMeComp: AboutComponent, 
    private app: AppComponent) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.aboutMeService.ver().subscribe(data => {
      this.aboutMe = data;
    })
  }

  onUpdate(): void {
    this.app.domSpinner(true);
    this.aboutMeService.update(this.aboutMe).subscribe(
      data => {
        this.aboutMeComp.cargarAboutMe();
        let a = alert("Modificada la información acerca de mi");
        if (a != null) {
          window.location.reload();
        } (error: any) => {
          let b = alert("No se pudo modificar la información");
          if (b != null) {
            window.location.reload();
            this.app.domSpinner(false);
          }
        }
        window.location.reload();
        this.app.domSpinner(false);
      }
    )
  }
}


