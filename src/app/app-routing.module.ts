import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { Error404Component } from './components/error-404/error-404.component';
import { HomeComponent } from './components/home/home.component';
import { QuemSouComponent } from './components/quem-sou/quem-sou.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  { path: "sign-in", component: SignInComponent },
  { path: "quem-sou", component: QuemSouComponent },
  { path: "cadastro", component: CadastroComponent },
  { path: "home", component: HomeComponent },
  { path: "**", component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: "", redirectTo: "sign-in", pathMatch: "full" }
  ]),
  RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
