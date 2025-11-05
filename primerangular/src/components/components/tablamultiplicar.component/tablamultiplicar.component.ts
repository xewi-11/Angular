import { Component } from '@angular/core';
import { ViewChild,ElementRef } from '@angular/core';
@Component({
  selector: 'app-tablamultiplicar',
  standalone: false,
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css',
})
export class TablamultiplicarComponent {
 public resultado:Array<number>;
 @ViewChild('cajanumero') cajanumero!: ElementRef;
 constructor(){
  this.resultado=new Array<number>();
 }
 generarTabla():void{
  this.resultado=[];
  let numero=parseInt(this.cajanumero.nativeElement.value);
  for(let i=1;i<=10;i++){
    this.resultado.push(numero*i);

  }
}
}
