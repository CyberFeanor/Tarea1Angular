import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio4',
  templateUrl: './ejercicio4.component.html',
  styleUrls: ['./ejercicio4.component.css']
})
export class Ejercicio4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  comidas:string[]=["Macarrones","Lasaña","Chuleton","Lomo Bajo","Espaguettis","Arroz con Tomate","Costillas","Torreznos"];

  public borrarComidas(){
    this.comidas = [];
  }


}
