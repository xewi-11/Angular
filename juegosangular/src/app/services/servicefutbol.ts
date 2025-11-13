import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugador } from '../interfaces/jugador';
import { environment } from '../../environments/environment.development';
import { Equipo } from '../interfaces/equipo';

@Injectable({
  providedIn: 'root',
})
export class Servicefutbol {
  constructor(private http:HttpClient){

  }
  getEquipos():Observable<Equipo[]>{
    return this.http.get<Equipo[]>(environment.apiFutbol + 'api/Equipos');
  }
  findJugadorByNombre(nombre:string):Observable<Jugador[]>{
    console.log( nombre);
    return this.http.get<Jugador[]>(environment.apiFutbol + 'api/Jugadores/BuscarJugadores/'+nombre);
  }

  getJugadoresByEquipo(idEquipo:string):Observable<Jugador[]>{
    return this.http.get<Jugador[]>(environment.apiFutbol + 'api/Jugadores/JugadoresEquipos/'+idEquipo);
  }
  getEquipoById(idEquipo:number):Observable<Equipo>{
    return this.http.get<Equipo>(environment.apiFutbol + 'api/Equipos/'+idEquipo);
  }
}
