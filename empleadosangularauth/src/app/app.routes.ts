import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { LoginComponent } from './components/login.component/login.component';
import { EmpleadosdetailsComponent } from './components/empleadosdetails.component/empleadosdetails.component';
import { SubordinadosComponent } from './components/subordinados.component/subordinados.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"login",component:LoginComponent},
    {path:"detalles",component:EmpleadosdetailsComponent},
    {path:"subordinados",component:SubordinadosComponent},
];
