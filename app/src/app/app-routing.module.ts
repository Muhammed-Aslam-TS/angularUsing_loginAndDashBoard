import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBordComponent } from './pages/dash-bord/dash-bord.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SideBsrComponent } from './shared/side-bsr/side-bsr.component';

const routes: Routes = [
  { path: 'dashboard', component: DashBordComponent },
  { path: '', component: LoginPageComponent },
  { path: 'navBar', component: SideBsrComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
