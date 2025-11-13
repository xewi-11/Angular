import { Component, Input, OnInit } from '@angular/core';
import { JugadoresComponent } from "../jugadores.component/jugadores.component";
import { Equipo } from '../../interfaces/equipo';
import { Servicefutbol } from '../../services/servicefutbol';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-equipos.component',
  imports: [JugadoresComponent],
  templateUrl: './equipos.component.html',
  styleUrl: './equipos.component.css',
})
export class EquiposComponent implements OnInit {
  public equipo!: Equipo;
  public jugadores: any[] = [];

  constructor(private service: Servicefutbol, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // No cargar aquí, especarar a que idEquipo esté definido
    this.cargarEquipo();
  }

  cargarEquipo() {
    this.route.params.subscribe(params => {
      const idEquipo = params['idEquipo'];
      forkJoin({
        equipo: this.service.getEquipoById(idEquipo).pipe(delay(4000)),
        jugadores: this.service.getJugadoresByEquipo(idEquipo).pipe(delay(4000))
      }).subscribe(result => {
        this.equipo = result.equipo;
        this.jugadores = result.jugadores;
      });
    });
  }
}
