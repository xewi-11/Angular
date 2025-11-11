import { Component, OnInit } from '@angular/core';
import Personaje from '../../../models/personaje';
import { Serviceseries } from '../../services/serviceseries';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-details-personajes',
  imports: [],
  templateUrl: './details.personajes.component.html',
  styleUrl: './details.personajes.component.css',
})
export class DetailsPersonajesComponent implements OnInit{
 public personaje!:Personaje;
 private idSerie!:number;
 constructor(private _service: Serviceseries, private route: ActivatedRoute,private _router:Router) {

 }
 ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idSerie = params['idSerie'];
      const idpersonaje = params['idPersonaje'];
      this.cargarPersonaje(idpersonaje);
    });
 }
 cargarPersonaje(id: number): void {
   this._service.getPersonajeById(id).subscribe((data: Personaje) => {
     this.personaje = data;
   });
 }
  goToPersonajes(): void {
    this._router.navigate([`/series/personajes/${this.idSerie}`]);
  }
}
