import { Component } from '@angular/core';

@Component({
  selector: 'app-padredeportes',
  standalone: false,
  templateUrl: './padredeportes.component.html',
  styleUrl: './padredeportes.component.css',
})
export class PadredeportesComponent {
 public deportesArray:Array<string>;
 public mensaje:string;


 constructor(){
    this.deportesArray = new Array<string>();
    this.deportesArray.push("Futbol");
    this.deportesArray.push("Baloncesto");
    this.deportesArray.push("Tenis");
    this.deportesArray.push("Ciclismo");
    this.deportesArray.push("Natacion");
    this.mensaje="";
 }
 // necesitamos un metodo que capture el evento del hijo el cual es cualquier tipado(any)

 seleccionarFavoritoPadre(event:any):void{
    console.log("Padre ha recibido el evento del hijo con el deporte: "+event);
 }
}
