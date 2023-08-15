import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SideBsrComponent } from './shared/side-bsr/side-bsr.component';
import { DashBordComponent } from './pages/dash-bord/dash-bord.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        DashBordComponent,
        SideBsrComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        NgbCollapseModule
    ]
})
export class AppModule { }
