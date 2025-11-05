import { Component, viewChild } from '@angular/core';
import { ViewChild,ElementRef } from '@angular/core';
@Component({
  selector: 'app-sumarnumeros',
  standalone: false,
  templateUrl: './sumarnumeros.component.html',
  styleUrl: './sumarnumeros.component.css',
})
export class SumarnumerosComponent {
  public resultado:number;
  @ViewChild('cajanumero1') cajaNumero1REf!:ElementRef;
  @ViewChild('cajanumero2') cajaNumero2REf!:ElementRef;
  constructor(){
    this.resultado=0;
  }
  sumarNumeros():void{
    let num1=parseInt(this.cajaNumero1REf.nativeElement.value);
    let num2=parseInt(this.cajaNumero2REf.nativeElement.value);
    this.resultado=num1+num2;

  }
}
