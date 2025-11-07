import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comic',
  standalone: false,
  templateUrl: './comic.component.html',
  styleUrl: './comic.component.css',
})
export class ComicComponent {
  @Input() comic!: Comic;
  @Input() index!:number;
  @Output() seleccionarFavoritoPadre: EventEmitter<any> = new EventEmitter();
  @Output() seleccionarComicAEliminar:EventEmitter<any>=new EventEmitter();
  seleccionarFavoritoHijo(): void {
    this.seleccionarFavoritoPadre.emit(this.comic);
  }
  eliminarComicHijo(): void {
    this.seleccionarComicAEliminar.emit(this.index);
  }
}
