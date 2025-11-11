import { Injectable } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Servicedepartamentos {
  constructor(private http: HttpClient) {}
  getDepartamentos(): Observable<any[]> {
    return this.http.get<any[]>(environment.urlDepartamentos + 'api/departamentos');
  }
  getDepartamentosById(id: number): Observable<any> {
    return this.http.get<any>(environment.urlDepartamentos + 'api/departamentos/' + id);
  }
  insertarDepartamento(departamento: Departamento): Observable<any> {
    return this.http.post(environment.urlDepartamentos + 'api/departamentos', departamento);
  }
  actualizarDepartamento(departamento: Departamento): Observable<any> {
    return this.http.put(environment.urlDepartamentos + 'api/departamentos/',  departamento);
  }
  eliminarDepartamento(id: number): Observable<any> {
    return this.http.delete(environment.urlDepartamentos + 'api/departamentos/' + id);
  }
}
