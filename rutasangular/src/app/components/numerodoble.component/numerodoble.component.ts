import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-numerodoble',
  standalone: false,
  templateUrl: './numerodoble.component.html',
  styleUrl: './numerodoble.component.css',
})
export class NumerodobleComponent implements OnInit {
  public doble:number;
  public numero!:number;

  constructor(private _router:Router,private _activeRoute:ActivatedRoute){
    this.doble=0;
  }
  redirect(num:number){
       this._router.navigate(['numerodoble',num]);
  }
  goToHome(){
    this._router.navigate(['/']);
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //aqui es donde nos subscribimos a los parametros
    this._activeRoute.params.subscribe((params:Params)=>{
      // dentro de params es donde recibimos los parametros por su namey su sintaxis para recuperar es es params['nombreParametro'],aunque en este ejemplo el parametro es opcional
      if(params['numero']!=null){
        this.numero=parseInt(params['numero']);
        this.doble=this.numero*2;
      }
    })
  }
}
