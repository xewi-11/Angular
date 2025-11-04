import { Component,OnInit,DoCheck } from '@angular/core';

@Component({
  selector: 'hooksangular-component',
  standalone: false,
  templateUrl: './hooksangular.component.html',
  styleUrls: ['./hooksangular.component.css'],
})
export class HooksangularComponent implements OnInit,DoCheck {
  constructor() { 
    console.log("Constructor:Primer metodod de inicio component");
  }
  ngOnInit(): void {
    console.log("ngOnInit :Segundo metodo de inicio component");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck actualizar:Tercer metodo de inicio component");
  }

}
