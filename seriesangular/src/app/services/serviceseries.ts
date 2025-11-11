import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Serviceseries {
   constructor(private http:HttpClient){
    
   }
   cargarSeries():Observable<any>{
     return this.http.get(environment.urlSeries);
   }
   cargarSerieById(id: number): Observable<any> {
     return this.http.get(`${environment.urlSeries}/${id}`);
   }
   getPersonajesSerie(id:number):Observable<any>{
     return this.http.get(`${environment.urlSeries}/PersonajesSerie/${id}`);
   }
   getPersonajeById(id:number):Observable<any>{
     return this.http.get(`${environment.urlPersonajes}/${id}`);
   }
   insertarPersonaje(personaje:any):Observable<any>{
     return this.http.post(environment.urlPersonajes,personaje);
   }
   getAllPersonajes():Observable<any>{
     return this.http.get(environment.urlPersonajes);
   }
   actualizarPersonaje(idpersonaje:number,idSerie:number):Observable<any>{
     return this.http.put(`${environment.urlPersonajes}/${idpersonaje}/${idSerie}`,null);
   }
}
