import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../../models/persona';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class ServicePersonas {
  //para realizar peticiones debemos inyectar el servicio HttpClient

  //si vamos a devolver la peticion el objeto a devolver es un Observable de Any
  constructor(private http: HttpClient) {}
  getPersonas(): Observable<any[]> {
    let urlApi = environment.urlPersonas;
    return this.http.get<any[]>(urlApi);
  }
  getPersonasPromise():Promise<any>{
    let urlApi = environment.urlPersonas;
    let promise=new Promise((resolve)=>{
       this.http.get(urlApi).subscribe((data)=>{
        resolve(data);
       });
    });
    return promise;
  }
  }

