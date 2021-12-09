import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  meses:string[] = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

  public borrarMes() {
    this.meses.shift();
  }
}
