import { Component, OnInit } from '@angular/core';
import { Persona } from '../../../models/persona';
import { ServicePersonas } from '../../services/service.personas';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-personastandalone',
  standalone: true,
  templateUrl: './personastandalone.component.html',
  styleUrl: './personastandalone.component.css',
  providers:[ServicePersonas]
})
export class PersonastandaloneComponent implements OnInit {
 public personas:Array<Persona>;
  
 constructor(private _service:ServicePersonas) {
  this.personas=new Array<Persona>();
 }
  ngOnInit(): void {
   this._service.getPersonas().subscribe(data => {
     this.personas = data;
   });}
}
