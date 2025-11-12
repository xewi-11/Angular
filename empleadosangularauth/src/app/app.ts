import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./components/menu.component/menu.component";
import { environment } from '../environments/environment.development';
import { LoginComponent } from "./components/login.component/login.component";
import { HomeComponent } from "./components/home.component/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, LoginComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public token!:string;
  constructor(){
    this.token="";
  }
  updateToken(newToken:string){
    this.token=newToken;
    environment.token=newToken;
  }
  protected readonly title = signal('empleadosangularauth');
}
