import { Component } from '@angular/core';
@Component({
  selector: 'app-forms-binding',
  standalone: false,
  templateUrl: "./formsbinding.component.html",
  styleUrl: './formsbinding.component.css',
})
export class FormsbindingComponent {
  public user:any;
  public mensaje:string;
  constructor(){
    this.user = {
      nombre:"",
      apellidos:"",
      edad:0
    };
    this.mensaje = '';
  }
  recibirDatos(){
    this.mensaje="Datos recibidos";
  }
}
