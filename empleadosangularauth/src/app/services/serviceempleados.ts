import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Empleado } from '../../models/empleados';

@Injectable({
  providedIn: 'root',
})
export class Serviceempleados {
   constructor(private http:HttpClient){

   }

   loginForUser(name:string,password:string):Observable<any>{
    let header=new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(environment.apiEmpleados+'auth/login',{username:name,password:password},{headers:header});
   }
   getEmpleadoToken():Observable<Empleado>{
    let header=new HttpHeaders()
    header=header.set('Authorization',`bearer  ${environment.token}`);
    return this.http.get<Empleado>(environment.apiEmpleados+'api/Empleados/PerfilEmpleado',{headers:header});
   }
   getSubordinadosEmpleado():Observable<Empleado[]>{
    let header=new HttpHeaders();
    header=header.set('Authorization',`bearer  ${environment.token}`);
    return this.http.get<Empleado[]>(environment.apiEmpleados+'api/Empleados/Subordinados',{headers:header});
   }
}
 