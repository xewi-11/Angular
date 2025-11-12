import { Route, Router } from '@angular/router';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Serviceempleados } from '../../services/serviceempleados';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
 @ViewChild('cajaName') cajaName:any;
 @ViewChild('cajaPassword') cajaPassword:any;
 @Output() updatetoken=new EventEmitter<string>();
 constructor(private _service:Serviceempleados,private Route:Router){
   this.cajaName=new ElementRef('');
   this.cajaPassword=new ElementRef('');
 }
 login(){
     this._service.loginForUser(this.cajaName.nativeElement.value,this.cajaPassword.nativeElement.value).subscribe(data=>{
       
       this.updatetoken.emit(data.response);
       environment.token=data.response
       console.log(environment.token);
        this.Route.navigate(['/detalles']);
     });
 }
 combertirTokenString(token:any):string{
    return JSON.stringify(token);
 }
 
}
