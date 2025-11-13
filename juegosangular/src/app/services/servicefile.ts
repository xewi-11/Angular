import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { from, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Servicefile {
  constructor(private http: HttpClient) {}

  subirArchivo(FileName: string, archivo: File): Observable<any> {
    return from(this.convertToBAse64(archivo)).pipe(
      switchMap((base64: string) => {
        const file = {
          fileName: FileName,
          fileContent: base64
        };
        let header=new HttpHeaders().set('Content-Type','application/json');
        return this.http.post(environment.urlFiles + 'api/TestingFiles', file,{headers:header});
      })
    );
  }

  

  private convertToBAse64(file:File):Promise<string>{
     return new Promise((resolve,reject)=>{
       const reader=new FileReader();
       reader.readAsDataURL(file);
       reader.onload=()=>{
        // onload devuelve algo como "data:application/pdf;base64,JVBERi0xLjc..."
        // Si solo quieres el contenido Base64, puedes recortar el prefijo:
         const base64=(reader.result as string).split(',')[1];
         resolve(base64);
       }
        reader.onerror=(error)=>{
          reject(error);
       }
     })
  }}
