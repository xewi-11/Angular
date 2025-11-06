import { Component, Input, OnInit } from '@angular/core';
import Coche from '../../models/coche';

@Component({
  selector: 'app-hijocoche',
  standalone: false,
  templateUrl: './hijocoche.component.html',
  styleUrl: './hijocoche.component.css',
})
export class HijococheComponent implements OnInit {
@Input() car!:Coche;
 public mensaje:string;

 constructor(){
    this.mensaje="";
 }
  ngOnInit(): void {}

  comprobarEstado():boolean{
    if(this.car.estado==false){
      this.mensaje="El coche está apagado";
      this.car.velocidad=0;
      return false;
    }else{
      this.mensaje="El coche está en marcha";
      return true;
    }
  }
  encenderCoche():void{
    this.car.estado=!this.car.estado;
    this.comprobarEstado();
  }
  acelerarCoche():void{
    if(this.comprobarEstado()){
      this.car.velocidad+=this.car.aceleracion;
      this.mensaje="El coche ha acelerado a " + this.car.velocidad + " km/h";
    }else{
       alert("donde vas que estoy apagado");
    }
  }
}
