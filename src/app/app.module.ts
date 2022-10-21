import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { BotoneraComponent } from './pages/botonera/botonera.component';
import { AboutComponent } from './pages/about/about.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { CertsComponent } from './pages/certs/certs.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ExpComponent } from './pages/exp/exp.component';
import { ProjsComponent } from './pages/projs/projs.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FooterComponent } from './pages/footer/footer.component';
import { FondoComponent } from './pages/fondo/fondo.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { EncabezadoComponent } from './pages/login/desconexion/encabezado.component';
import { InterceptorService } from './serv/interceptor-service';
import { PortfolioService } from './serv/portfolio.service';
import { AboutEditComponent } from './pages/about/about-edit/about-edit.component';
import { ContactoListarComponent } from './pages/contacto/contacto-listar/contacto-listar.component';
import { ContactoNuevoComponent } from './pages/contacto/contacto-nuevo/contacto-nuevo.component';
import { EducacionListarComponent } from './pages/educacion/educacion-listar/educacion-listar.component';
import { EducacionNuevoComponent } from './pages/educacion/educacion-nuevo/educacion-nuevo.component';
import { CertsListarComponent } from './pages/certs/certs-listar/certs-listar.component';
import { CertsNuevoComponent } from './pages/certs/certs-nuevo/certs-nuevo.component';
import { ExpListarComponent } from './pages/exp/exp-listar/exp-listar.component';
import { ExpNuevoComponent } from './pages/exp/exp-nuevo/exp-nuevo.component';
import { ProjsListarComponent } from './pages/projs/projs-listar/projs-listar.component';
import { ProjsNuevoComponent } from './pages/projs/projs-nuevo/projs-nuevo.component';
import { SkillsListarComponent } from './pages/skills/skills-listar/skills-listar.component';
import { SkillsNuevoComponent } from './pages/skills/skills-nuevo/skills-nuevo.component';
import { SimonComponent } from './pages/login/simon/simon.component';
import { SimonListarComponent } from './pages/login/simon/simon-listar/simon-listar.component';
import { SimonNuevoComponent } from './pages/login/simon/simon-nuevo/simon-nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BotoneraComponent,
    AboutComponent,
    EducacionComponent,
    CertsComponent,
    SkillsComponent,
    ExpComponent,
    ProjsComponent,
    ContactoComponent,
    FooterComponent,
    FondoComponent,
    LoginComponent,
    EncabezadoComponent,
    AboutEditComponent,
    ContactoListarComponent,
    ContactoNuevoComponent,
    EducacionListarComponent,
    EducacionNuevoComponent,
    CertsListarComponent,
    CertsNuevoComponent,
    ExpListarComponent,
    ExpNuevoComponent,
    ProjsListarComponent,
    ProjsNuevoComponent,
    SkillsListarComponent,
    SkillsNuevoComponent,
    SimonComponent,
    SimonListarComponent,
    SimonNuevoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    PortfolioService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [
    AppComponent,
    InterceptorService]
})
export class AppModule { }
