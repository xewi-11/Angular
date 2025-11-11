import { Component, OnInit } from '@angular/core';
import { Serie } from '../../../models/serie';
import { Serviceseries } from '../../services/serviceseries';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seriesdetails',
  templateUrl: './seriesdetails.component.html',
  styleUrls: ['./seriesdetails.component.css'], // 👈 ojo, debe ser plural
})
export class SeriesdetailsComponent implements OnInit {
  public serie!: Serie;
  public idSerie!: number;

  constructor(
    private _service: Serviceseries,
    private route: ActivatedRoute,
    private _route:Router
  ) {}

  ngOnInit(): void {
    // 👇 Nos suscribimos siempre a los cambios de parámetros
    this.route.params.subscribe((params) => {
      const id = params['id']; // convertimos a número

      // Solo recargamos si realmente cambia el id
      if ( id !== this.idSerie) {
        this.idSerie = id;
        console.log('Cargando serie con id:', this.idSerie);
        this.cargarSerie();
      }
    });
  }

  cargarSerie(): void {
    this._service.cargarSerieById(this.idSerie).subscribe(
     (data) => {
        this.serie = data;
      }
    );
  }
  goToHome(): void {
    this._route.navigate(['/']);
}
  goToPersonajes(): void {
    this._route.navigate([`/series/personajes/${this.idSerie}`]);}
}
