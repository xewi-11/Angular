import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijodeportes',
  standalone: false,
  templateUrl: './hijodeportes.component.html',
  styleUrl: './hijodeportes.component.css',
})
export class HijodeportesComponent {
@Input() deporte!:string;
@Output() seleccionarFavoritoPadre:EventEmitter<any>= new EventEmitter();

  // necesitamos un metodo que capture el evento click y a su vez llamamos al padre

  seleccionarFavoritoHijo():void{
    //dentro de emit enviamos los parametros necesarios
     this.seleccionarFavoritoPadre.emit(this.deporte);
  }

 

}
