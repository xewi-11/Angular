import { Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';
import { provideHttpClient } from '@angular/common/http';
import { Persona } from '../../../models/persona';

@Component({
  selector: 'app-personas.component',
  imports: [],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css',
  providers:[ServicePersonas]
})
export class PersonasComponent implements OnInit {
 public personas:Array<Persona>;
  constructor(private _service:ServicePersonas) {
    this.personas=new Array<Persona>();
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this._service.getPersonasAxios().then((data)=>{
    //   this.personas=data;
    // })

    this.cargarPersonas();
  }
  async cargarPersonas() {
  const personas = await this._service.getPersonasFetch().then((data:any)=>{
      this.personas=data;
    });
  // aquí tienes los datos
}
}
