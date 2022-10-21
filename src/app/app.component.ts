import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './serv/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogin = false;
  roles!: string[];
  authority!: string;
  esLogin = false;
  constructor(private tokenService: TokenService, public router: Router) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogin = true;
      this.roles = [];
      this.roles = this.tokenService.getAuthorities();
      this.roles.every(rol => {
        if (rol === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }

  logOut(): void {
    this.tokenService.logout();
    this.isLogin = false;
    this.authority = '';
    this.router.navigate(['login']);
  }

  domSpinner(queCosa: boolean): void {
    const x = document.getElementById('loading');
    if (x) {
      if (queCosa) {
        x.style.display = 'block';
      } else {
        x.style.display = "none";
      }
    }
  }

}
