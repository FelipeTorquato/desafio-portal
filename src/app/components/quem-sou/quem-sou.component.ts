import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quem-sou',
  templateUrl: './quem-sou.component.html',
  styleUrls: ['./quem-sou.component.css']
})
export class QuemSouComponent implements OnInit {
  minhasInformacoes = {
    nome: "Felipe Camurça Torquato",
    idade: "20 anos",
    curso: "Engenharia da Computação - IFCE"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
