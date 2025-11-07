import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios from 'axios';
import { Persona } from '../../models/persona';

@Injectable({
  providedIn: 'root',
})
export class ServicePersonas {
   constructor(private http:HttpClient){

   }
  getPersonas():Observable<any[]>{
    let urlApi=environment.urlPersonas;
      
    return this.http.get<any[]>(urlApi);
  }
  getPersonasAxios():Promise<any>{
    let urlApi=environment.urlPersonas;
    let personas:Array<Persona>=new Array<Persona>();
    
     return new Promise((resolve)=>{
          axios.get(urlApi).then((response)=>{
      personas=response.data as Array<Persona>;
      resolve(personas);
     });
     });
  }
 async getPersonasFetch(){
    let urlApi=environment.urlPersonas;
    const response=await fetch(urlApi);
    if(!response.ok){
      throw new Error("Error en la llamada a la API");
    }
    return await response.json();
  }
}
