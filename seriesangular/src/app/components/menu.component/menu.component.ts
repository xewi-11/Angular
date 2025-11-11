import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { Serie } from '../../../models/serie';
import { Serviceseries } from '../../services/serviceseries';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
 public series=Array<Serie>();
 @ViewChild('selectedSerie') selectedSerie!:ElementRef;
 constructor(private _service:Serviceseries,private route:Router){
   this.selectedSerie= new ElementRef('');
 }
 ngOnInit(): void {
     this._service.cargarSeries().subscribe(data => {
       this.series = data;
     });
 }
 goToSerie():void{
   if (this.selectedSerie) {
     this.route.navigate([`/series/${this.selectedSerie.nativeElement.value}`]);
   }

 }
}
