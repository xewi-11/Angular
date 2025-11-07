import { Component, OnInit } from '@angular/core';
import { Persona } from '../../../models/persona';
import { ServicePersonas } from '../../services/service.personas';

@Component({
  selector: 'app-personasapi',
  standalone: false,
  templateUrl: './personasapi.component.html',
  styleUrl: './personasapi.component.css',
})
export class PersonasapiComponent implements OnInit {
 public personas:Array<Persona>;
  constructor(private _service:ServicePersonas) {
    this.personas=new Array<Persona>();
   
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //subscribe funciona como el then de axios
    //  this._service.getPersonas().subscribe(data => {
    //   console.log("Leyendo datos de la API");
    //   this.personas = data;
    // });
    this._service.getPersonasPromise().then((data:any)=>{
      console.log("Datos leidos con promesa");
      this.personas=data;
    });
  }
  
}
