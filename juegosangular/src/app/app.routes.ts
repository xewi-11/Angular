import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { PostfilesComponent } from './components/postfiles.component/postfiles.component';
import { JugadoresComponent } from './components/jugadores.component/jugadores.component';
import { EquiposComponent } from './components/equipos.component/equipos.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent
    },
    {
        path:'insertar-archivos',component:PostfilesComponent
    },
    {
        path:'equipos/:idEquipo',component:EquiposComponent
    },
    {
        path:'jugadores/nombre/:nombre',component:JugadoresComponent
    },
    
];
