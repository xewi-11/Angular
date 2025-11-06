import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijodeportes',
  standalone: false,
  templateUrl: './hijodeportes.component.html',
  styleUrl: './hijodeportes.component.css',
})
export class HijodeportesComponent {
@Input() deporte!:string;


 

}
