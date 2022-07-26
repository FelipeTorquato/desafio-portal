import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { QuemSouComponent } from './components/quem-sou/quem-sou.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HomeComponent } from './components/home/home.component';
import { ContraChequeComponent } from './components/contra-cheque/contra-cheque.component';
import { CrachaDigitalComponent } from './components/cracha-digital/cracha-digital.component';
import { ServiceDeskComponent } from './components/service-desk/service-desk.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    SignInComponent,
    QuemSouComponent,
    CadastroComponent,
    HomeComponent,
    ContraChequeComponent,
    CrachaDigitalComponent,
    ServiceDeskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
