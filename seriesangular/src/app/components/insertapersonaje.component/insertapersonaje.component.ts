import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Serie } from '../../../models/serie';
import { Serviceseries } from '../../services/serviceseries';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertapersonaje',
  imports: [FormsModule],
  templateUrl: './insertapersonaje.component.html',
  styleUrl: './insertapersonaje.component.css',
  providers: [],
})
export class InsertapersonajeComponent implements OnInit {
  public series = Array<Serie>();
  @ViewChild('cajaId') cajaId: any;
  @ViewChild('cajaNombre') cajaNombre: any;
  @ViewChild('cajaImagen') cajaImagen: any;
  @ViewChild('cajaSelect') cajaSelect: any;
  constructor(private _service: Serviceseries, private _router: Router) {
    this.cajaId = new ElementRef('');
    this.cajaNombre = new ElementRef('');
    this.cajaImagen = new ElementRef('');
    this.cajaSelect = new ElementRef('');
  }
  ngOnInit(): void {
    this.cargarSeries();
  }
  cargarSeries(): void {
    this._service.cargarSeries().subscribe((data) => {
      this.series = data;
    });
  }
  insertarPersonaje(): void {
    const id = parseInt(this.cajaId.nativeElement.value);
    const nombre = this.cajaNombre.nativeElement.value;
    const imagen = this.cajaImagen.nativeElement.value;
    const idSerie = parseInt(this.cajaSelect.nativeElement.value);
    const nuevoPersonaje = { id, nombre, imagen, idSerie };
    this._service.insertarPersonaje(nuevoPersonaje).subscribe(() => {
      alert('Personaje insertado correctamente');
        this._router.navigate([``]);
      });
    
  }
}
