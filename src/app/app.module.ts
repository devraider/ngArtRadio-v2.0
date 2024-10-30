import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './commons/navbar/navbar.component';
import { FooterComponent } from './commons/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    InputTextModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forRoot([
      // Do leazy loading
      {path: "", loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)},
      {path: "radio", loadChildren: () => import('./radio/radio.module').then(m => m.RadioModule)},
      {path: "**", loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)},
    ]),
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
