import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Servicedepartamentos } from '../../services/servicedepartamentos';

@Component({
  selector: 'app-actualizar',
  imports: [RouterLink,FormsModule],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css',
  providers:[NgForm]
})
export class ActualizarComponent implements OnInit {
 public status:Boolean=false;
  @ViewChild('cajaNumero') cajaNumero:any;
 @ViewChild('cajaNombre') cajaNombre:any;
  @ViewChild('cajaLocalidad') cajaLocalidad:any;


  constructor(private _service:Servicedepartamentos,private route:ActivatedRoute){
    this.cajaNumero=new ElementRef('');
    this.cajaNombre=new ElementRef('');
    this.cajaLocalidad=new ElementRef('');
  }
  ngOnInit(): void {
    this.cargarInformacion();
  }
  actualizarDepartamento():void{
    let numero=parseInt(this.cajaNumero.nativeElement.value);
    let nombre=this.cajaNombre.nativeElement.value;
    let localidad=this.cajaLocalidad.nativeElement.value;
    let departamento={
      numero:numero,
      nombre:nombre,
      localidad:localidad
    }
    this._service.actualizarDepartamento(departamento).subscribe(response => {
      console.log('Departamento actualizado', response);
      alert('Departamento actualizado correctamente');
      this.status = true;
    });
  }
  cargarInformacion():void{
     let numero=0;
      this.route.params.subscribe(params=>{
       numero=params['numero'];
     })
     this._service.getDepartamentosById(numero).subscribe((response:any)=>{
        this.cajaNumero.nativeElement.value=response.numero;
        this.cajaNombre.nativeElement.value=response.nombre;
        this.cajaLocalidad.nativeElement.value=response.localidad;
     })
  }
}
