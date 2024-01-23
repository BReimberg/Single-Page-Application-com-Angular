import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  produtos:string[] = []
  menuType:string = "superuser"

  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "fonte"
    ]
  }

  ngOnInit(): void {
  }

  adicionar() {
    this.produtos.push("Brenda");
    //remover o ultimo item da lista: this.produtos.pop();
  }

  remover(index: number){
    this.produtos.splice(index, 1)
  }

}
