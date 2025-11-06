import { Component } from '@angular/core';
import Coche from '../../models/coche';

@Component({
  selector: 'app-padrecoche',
  standalone: false,
  templateUrl: './padrecoche.component.html',
  styleUrl: './padrecoche.component.css',
})
export class PadrecocheComponent {
  public cochesArray:Array<Coche>;

  constructor(){
    this.cochesArray = new Array<Coche>();
    this.cochesArray.push(new Coche("Seat","Rojo",150,10,false));
    this.cochesArray.push(new Coche("Renault","Azul",120,25,true));
    this.cochesArray.push(new Coche("Citroen","Verde",130,20,false));
    this.cochesArray.push(new Coche("Peugeot","Amarillo",140,30,false));
  }
}
