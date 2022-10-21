import { Component, Input, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/contacto';
import { ContactoService } from 'src/app/serv/contacto.service';
import { PortfolioService } from 'src/app/serv/portfolio.service';
import { TokenService } from 'src/app/serv/token.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  listaContacto: Contacto[] = [];
  modifica = false;
  isLogged = false;

  getRed(red: any) {
    switch (red) {
      case 'Facebook':
        return 'bxl-facebook';
      case 'Instagram':
        return 'bxl-instagram';
      case 'Telegram':
        return 'bxl-telegram';
      case 'Whatsapp':
        return 'bxl-whatsapp';
      case 'Youtube':
        return 'bxl-youtube';
      case 'Twitter':
        return 'bxl-twitter';
      case 'Coffee':
        return 'bxs-coffee';
      case 'LinkedIn':
        return 'bxl-linkedin';
      case 'Web':
        return 'bx-globe';
      default:
        return;
    }
  }

  constructor(private datosPortfolio: PortfolioService,
    private tokenService: TokenService,
    private contactoService: ContactoService) { }

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
    this.contactoService.getContacto().subscribe(data => {
      this.listaContacto = data;
    })
  }


  onNavigate(web: any) {
    window.open(web, "_blank");
  }

  reloadME(): void {
    window.location.reload();
  }
}
