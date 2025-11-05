import { Component } from '@angular/core';

@Component({
  selector: 'deportes-component',
  standalone: false,
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.css'],
})
export class DeportesComponent {
  public sports:Array<string>;
  public numeros:Array<number>;
  constructor(){
    this.sports = ['Futbol', 'Baloncesto', 'Tenis', 'Ciclismo', 'Natacion'];
    this.numeros = [1, 2, 3, 4, 5];
  }
}
