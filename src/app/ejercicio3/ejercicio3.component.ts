import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  flores:string[]=["Rosa","Margarita","Manzanilla","Diente de León","Tulipan","Petunia","Jazmin","Lavanda"];

  public borrarFlores(){
    this.flores = [];
  }

}
