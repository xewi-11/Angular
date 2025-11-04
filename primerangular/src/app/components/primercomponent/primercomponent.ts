import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
//un component debe tener siempre la declaracion de su contenido
@Component({
  //debemos declarar el nombre del component,mediante su selector html
  selector: 'primer-component',
  standalone: false,
  templateUrl: './primercomponent.html',
  styleUrl: './primercomponent.css',
})
export class Primercomponent {
 public titulo:string;
 public descripcion:string;
 public year:number;
// en angular al igual que en react teneos un constructor.En dicho constructor sera donde inicializaremos los elementos de mi clase

 constructor(){
  this.titulo="Hola soy el primer componente";
  this.descripcion="Descripcion del componente";
  this.year=2024;
 }
}
