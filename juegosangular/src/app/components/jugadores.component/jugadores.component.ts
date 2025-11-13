import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Servicefile } from '../../services/servicefile';
import { Servicefutbol } from '../../services/servicefutbol';
import { Jugador } from '../../interfaces/jugador';

@Component({
  selector: 'app-jugadores',
  imports: [],
  templateUrl: './jugadores.component.html',
  styleUrl: './jugadores.component.css',
})
export class JugadoresComponent implements OnInit {
  public jugadores:Array<any>;
  @Input() jugadoresProps!:Jugador[];
  constructor(private route:ActivatedRoute,private _service:Servicefutbol) {
      this.jugadores=new Array<any>();
  }
 ngOnInit(): void {
      this.route.params.subscribe(params=>{
        if(params['nombre']){
          
           const nombreJugador = params['nombre'];
                this.cargarJugadoresPorNombre(nombreJugador);
          // Aquí puedes usar idEquipo para cargar los jugadores correspondientes
        }else{
          this.jugadores=this.jugadoresProps;
        }
      });
 }
 cargarJugadoresPorNombre(nombre:string){
     // Lógica para cargar jugadores por nombre  
     console.log( nombre); 
     this._service.findJugadorByNombre(nombre).subscribe((jugadores)=>{
         this.jugadores=jugadores;
         console.log( this.jugadores);
     });
 }


}
