import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-menutabla',
  standalone: false,
  templateUrl: './menutabla.component.html',
  styleUrl: './menutabla.component.css',
})
export class MenutablaComponent implements OnInit {
 public numeros:Array<number>;
  constructor(){
    this.numeros=new Array();
  }
  ngOnInit(): void {
    for(let i=1;i<=10;i++){
      let num:number=Math.floor(Math.random()*100)+1;
      this.numeros.push(num);
    }
  }
}
