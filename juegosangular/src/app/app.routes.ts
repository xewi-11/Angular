import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { PostfilesComponent } from './components/postfiles.component/postfiles.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent
    },
    {
        path:'insertar-archivos',component:PostfilesComponent
    },
    
];
