import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css']
})
export class Ejercicio2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dias:string[]=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

  public borrarDia(){
    this.dias.pop();
  }

}
