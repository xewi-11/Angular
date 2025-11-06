import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'app-tablamultiplicar',
  standalone: false,
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css',
})
export class TablamultiplicarComponent implements OnInit {
public resultado:Array<Number>;
public numero!:number;
  constructor(private _activeRoute:ActivatedRoute){
    this.resultado=new Array();
  }
  calcularTabla(num:number){
    this.resultado=[];
     for(let i=1;i<=10;i++){
        this.resultado.push(num*i);
     }
  }
  ngOnInit(): void {
        this._activeRoute.params.subscribe((parametros:Params)=>{
          if(parametros['numero']!=null){
          this.numero=parseInt(parametros['numero']);
          this.calcularTabla(this.numero);
        }})
  }
}
