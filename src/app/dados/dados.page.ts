import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {
  private nome : string;
  private idade : string;
  private email : string;
  private telefone : string;

  private pessoa : object;

  private caminho : string;

  constructor() {

    this.caminho = "/assets/icon/favicon.png"

    this.nome = "Yoshi";
    this.idade = "28";
    this.email = "joao@supermario.com";
    this.telefone =  "14 - 98865-4479"; 
    
    this.pessoa = {
      nome : "Jailson",
      idade : "39",
      email : "jailso@msn.com",
      telefone :  "11 - 98115-6355"
    }


  }



  ngOnInit() {
  }

}
