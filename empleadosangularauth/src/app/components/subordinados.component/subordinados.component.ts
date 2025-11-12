import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../../models/empleados';
import { Serviceempleados } from '../../services/serviceempleados';

@Component({
  selector: 'app-subordinados.component',
  imports: [],
  templateUrl: './subordinados.component.html',
  styleUrl: './subordinados.component.css',
})
export class SubordinadosComponent implements OnInit {
public subordinados!:Array<Empleado>;
 constructor(private _service:Serviceempleados){
    this.subordinados=new Array<Empleado>();
 }
 ngOnInit(): void {
     this._service.getSubordinadosEmpleado().subscribe(data=>{
       this.subordinados=data;
     });
 }
}
