import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Serie } from '../../../models/serie';
import Personaje from '../../../models/personaje';
import { Serviceseries } from '../../services/serviceseries';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updatepersonaje.component',
  imports: [FormsModule],
  templateUrl: './updatepersonaje.component.html',
  styleUrl: './updatepersonaje.component.css',
})
export class UpdatepersonajeComponent implements OnInit {
 public series!:Array<Serie>;
 public personajes!:Array<Personaje>;
 @ViewChild('cajaSerie') cajaSerie:any;
 @ViewChild('cajaPersonaje') cajaPersonaje:any;
 constructor(private _service:Serviceseries,private _router:Router){
    this.cajaSerie=new ElementRef('');
    this.cajaPersonaje=new ElementRef('');
 }
 ngOnInit(): void {
    this.cargarSeries();
    this.cargarPersonajes();
 }
 cargarSeries():void{
   this._service.cargarSeries().subscribe(data => {
     this.series = data;
   });
  }
  cargarPersonajes():void{
    this._service.getAllPersonajes().subscribe((data:Array<Personaje>) => {
      this.personajes = data;
    });
  }
  updatePersonaje(){
     this._service.actualizarPersonaje(this.cajaPersonaje.nativeElement.value, this.cajaSerie.nativeElement.value).subscribe(() => {
        alert('Personaje actualizado correctamente');
       this._router.navigate([`/series/personajes/${this.cajaSerie.nativeElement.value}`]); // Navigate after update, adjust the route as needed
     });
  }
}
