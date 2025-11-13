import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { Servicefutbol } from '../../services/servicefutbol';
import { Equipo } from '../../interfaces/equipo';
import { JugadoresComponent } from '../jugadores.component/jugadores.component';
import { App } from '../../app';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  @ViewChild('cajaNombre') cajaNombre:any;
  public equipos:Array<any>;
  constructor(private _service:Servicefutbol,private router:Router){
      this.cajaNombre=new ElementRef('');
      this.equipos=new Array<any>();
  }
  ngOnInit(): void {
      this.cargarEquipos();
  }
  buscarJugador(){
    const nombreJugador:string=this.cajaNombre.nativeElement.value;
        this.router.navigate(['/jugadores/nombre/', nombreJugador]);
    
  }
  cargarEquipos(){
      this._service.getEquipos().subscribe((result)=>{
          this.equipos=result ;
      })
  }
}
