import { Component, OnInit } from '@angular/core';
import Personaje from '../../../models/personaje';
import { Serviceseries } from '../../services/serviceseries';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personajes',
  imports: [],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css',
})
export class PersonajesComponent implements OnInit {
  public personajes!: Array<Personaje>;
  private idSerie!: number;
  constructor(private _service: Serviceseries, private route: ActivatedRoute,private _router: Router) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idSerie = params['id'];
      this.cargarPersonajes(this.idSerie);
    });
  }
  cargarPersonajes(id: number): void {
    this._service.getPersonajesSerie(id).subscribe((data: Array<Personaje>) => {
      this.personajes = data;
    });
  }
  goToPersonajeDetails(idPersonaje: number): void {
    this._router.navigate([`/series/personajes/details/${this.idSerie}/${idPersonaje}`]);
  }
}
