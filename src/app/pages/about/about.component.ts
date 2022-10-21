import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/serv/portfolio.service';
import { AboutMeService } from 'src/app/serv/aboutme.service';
import { AboutMe } from 'src/app/models/about-me';
import { TokenService } from 'src/app/serv/token.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  modifica = false;
  isLogged = false;

  elPortfolio: any;

  aboutMe: AboutMe = new AboutMe("", "", "", "", "", 0);

  constructor(private datosPortfolio: PortfolioService,
    private aboutMeService: AboutMeService,
    private tokenService: TokenService,
    private app: AppComponent) { }

  ngOnInit(): void {
    this.cargarPortfolio();
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

  cargarPortfolio(): void {
    this.datosPortfolio.lista().subscribe(data => {
      this.elPortfolio = data;
    });
  }

  cargarAboutMe(): void {
    this.aboutMeService.ver().subscribe(data => {
      this.aboutMe = data;
    })
  }

  devolverAboutMe(): AboutMe {
    this.aboutMeService.ver().subscribe(data => {
      this.aboutMe = data;

    })
    return this.aboutMe;
  }

}
