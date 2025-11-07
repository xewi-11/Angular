import { Component,ViewChild,ElementRef, OnInit } from '@angular/core';
import { Comic } from '../../models/comic';
import { ServiceComics } from '../../services/service.comics';

@Component({
  selector: 'app-libreria',
  standalone: false,
  templateUrl: './libreria.component.html',
  styleUrl: './libreria.component.css',
      
})
export class LibreriaComponent implements OnInit {
 public comicsArray!: Array<Comic>;
 public comicFavorito!:Comic;
 @ViewChild('cajanombre') cajanombre!: ElementRef;
 @ViewChild('cajaimagen') cajaimagen!: ElementRef;
 @ViewChild('cajadescripcion') cajadescripcion!: ElementRef;

 ngOnInit(): void {
   this.comicsArray=this._service.getComics();
 }

 constructor(private _service:ServiceComics){

 }
 
 nuevoComic():void{
  let titulo=this.cajanombre.nativeElement.value;
  let imagen=this.cajaimagen.nativeElement.value;
  let descripcion=this.cajadescripcion.nativeElement.value;
  let nuevoComic=new Comic(titulo,imagen,descripcion);
  this.comicsArray.push(nuevoComic);
 }
 seleccionarFavoritoPadre(event:any):void{
  console.log("Comic seleccionado en libreria componente padre:", event);
  this.comicFavorito=event;
 }
 seleccionarComicAEliminar(event:any):void{
    this.comicsArray.splice(event,1);
    if(this.comicFavorito && this.comicsArray.indexOf(this.comicFavorito)===-1){
      this.comicFavorito={} as Comic;
   }
 }
}
