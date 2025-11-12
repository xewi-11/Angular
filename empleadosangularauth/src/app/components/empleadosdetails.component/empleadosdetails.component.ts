import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../../models/empleados';
import { Serviceempleados } from '../../services/serviceempleados';

@Component({
  selector: 'app-empleadosdetails.component',
  imports: [],
  templateUrl: './empleadosdetails.component.html',
  styleUrl: './empleadosdetails.component.css',
})
export class EmpleadosdetailsComponent implements OnInit {
  public empleado!:Empleado;
  constructor(private _service:Serviceempleados){

  }
  ngOnInit(): void {
    this.cargarInformacionEmpleado();
  }

  cargarInformacionEmpleado(){
    this._service.getEmpleadoToken().subscribe(data=>{
      this.empleado=data;
    });
  }
}
