import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { GuardGuard } from './serv/guard.guard';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { CertsComponent } from './pages/certs/certs.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ExpComponent } from './pages/exp/exp.component';
import { ProjsComponent } from './pages/projs/projs.component';
import { AboutComponent } from './pages/about/about.component';
import { SimonComponent } from './pages/login/simon/simon.component';

const routes: Routes = [
  { path: 'inicio', component: AboutComponent, canActivate:[GuardGuard] },
  { path: 'educacion', component: EducacionComponent, canActivate:[GuardGuard] },
  { path: 'certificaciones', component: CertsComponent, canActivate:[GuardGuard] },
  { path: 'habilidades', component: SkillsComponent, canActivate:[GuardGuard] },
  { path: 'experiencia', component: ExpComponent, canActivate:[GuardGuard] },
  { path: 'proyectos', component: ProjsComponent, canActivate:[GuardGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'simon', component: SimonComponent },
  { path: '', redirectTo: 'login',pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
