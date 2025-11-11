import { Component, ViewChild, ElementRef} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Servicedepartamentos } from '../../services/servicedepartamentos';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-insertar',
  imports: [FormsModule, RouterLink],
  templateUrl: './insertar.component.html',
  styleUrl: './insertar.component.css',
  providers: [NgForm]
})
export class InsertarComponent {
 @ViewChild('cajaNumero') cajaNumero:any;
 @ViewChild('cajaNombre') cajaNombre:any
@ViewChild('cajaLocalidad') cajaLocalidad:any;
public status:Boolean=false;
constructor(private _service:Servicedepartamentos){
  this.cajaNumero=new ElementRef('');
  this.cajaNombre=new ElementRef('');
  this.cajaLocalidad=new ElementRef('');
}
insertarDepartamento():void{
  let numero=parseInt(this.cajaNumero.nativeElement.value);
  let nombre=this.cajaNombre.nativeElement.value;
  let localidad=this.cajaLocalidad.nativeElement.value;
  let departamento={
    numero:numero,
    nombre:nombre,
    localidad:localidad
  }
  this._service.insertarDepartamento(departamento).subscribe(response => {
    console.log('Departamento insertado', response);
    alert('Departamento insertado correctamente');
    this.status = true;
  });
}}
