
import { Component, ViewChild,ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Servicefile } from '../../services/servicefile';


@Component({
  selector: 'app-postfiles',
  imports: [FormsModule],
  templateUrl: './postfiles.component.html',
  styleUrl: './postfiles.component.css',
})
export class PostfilesComponent  {
 @ViewChild('cajaFile') cajaFile:any;

 constructor(private _service:Servicefile){
     this.cajaFile=new ElementRef('');
 }
  subirArchivo(){
    const archivoSeleccionado:File=this.cajaFile.nativeElement.files[0];

    this._service.subirArchivo(archivoSeleccionado.name,archivoSeleccionado).subscribe(()=>{
        console.log("Archivo subido correctamente");
        
    })
  }
}
