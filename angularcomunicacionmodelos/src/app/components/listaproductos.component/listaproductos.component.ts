import { Component } from '@angular/core';
import Producto from '../../models/producto';
@Component({
  selector: 'app-listaproductos',
  standalone: false,
  templateUrl: './listaproductos.component.html',
  styleUrl: './listaproductos.component.css',
})
export class ListaproductosComponent {
  public productos: Array<Producto>;
  public producto: Producto;
  constructor() {
    this.producto = new Producto(
      'Camiseta',
      'https://http2.mlstatic.com/D_NQ_NP_2X_683589-MLM48931082894_012022-F.webp',
      19.99
    );
    this.productos = new Array<Producto>();
    this.productos = [
      new Producto(
        'Nike Air Jordan',
        'https://images.zapantojos.com/media/2022/07/39253d37.jpg',
        150
      ),
      new Producto(
        'Nike Air Mag',
        'https://limitedresell.com/img/anblog/b/b-654d14cfc06f5-anblog_thumb.jpg',
        1900
      ),
      new Producto(
        'New Balance 998',
        'https://www.sneakers-actus.fr/wp-content/uploads/2023/06/NB-998-U998TE-x-Teddy-Santis-Plum-Purple-MIUSA.jpg',
        140
      ),
      new Producto(
        'J-Hayber Olimpo',
        'https://jhayber.com/documents/images/products/63638-850-1.jpg',
        60
      ),
      new Producto(
        'Triple S Balenciaga',
        'https://cdn1.jolicloset.com/imgr/full/2024/05/1321192-1/plastico-zapatillas-balenciaga-triple-s-de-poliuretano-blanco-amarillo.jpg',
        650
      ),
    ];
    this.productos.push(this.producto);
  }
}
