import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  masterPass = {
    email: "admin@admin.com",
    senha: "admin123"
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  checarCredenciais() {
    let email = document.getElementById("inputEmail") as HTMLInputElement;
    let senha = document.getElementById("inputPassword") as HTMLInputElement;
    let myAlert = document.getElementById("alert") as HTMLElement;
    if ((String(email.value)) !== "" && String(senha.value) !== "") {
      if ((String(email.value) !== this.masterPass.email || String(senha.value) !== this.masterPass.senha)) {
        myAlert.style.display = "";
      } else {
        this.router.navigate(['/', 'home']);
      }
    }
  }
}
