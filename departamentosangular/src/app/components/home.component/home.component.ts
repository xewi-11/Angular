import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../../models/departamento';
import { Servicedepartamentos } from '../../services/servicedepartamentos';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home.component',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public departamentos: Array<Departamento>;

  constructor(private _service: Servicedepartamentos) {
    this.departamentos = new Array<Departamento>();
  }
  ngOnInit(): void {
    this.cargarDepartamentos();
  }
  cargarDepartamentos(): void {
    this._service.getDepartamentos().subscribe((response: any) => {
      this.departamentos = response;
    });
  }
  eliminarDepartamento(numero: number): void {
    Swal
      .fire({
        title: '¿Estás seguro?',
        text: `¿Quieres eliminar el departamento con número ${numero}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
      })
      .then((result: any) => {
        if (result.isConfirmed) {
          this._service.eliminarDepartamento(numero).subscribe(() => {
            this.cargarDepartamentos();
          });
        }
      });
  }
}
