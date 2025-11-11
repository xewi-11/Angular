import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { SeriesdetailsComponent } from './components/seriesdetails.component/seriesdetails.component';
import { PersonajesComponent } from './components/personajes.component/personajes.component';
import { DetailsPersonajesComponent } from './components/details.personajes.component/details.personajes.component';
import { InsertapersonajeComponent } from './components/insertapersonaje.component/insertapersonaje.component';
import { UpdatepersonajeComponent } from './components/updatepersonaje.component/updatepersonaje.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'insertar', component:InsertapersonajeComponent},
    {path:'actualizar', component:UpdatepersonajeComponent},
    {path:'series/:id', component:SeriesdetailsComponent},
    {path:'series/personajes/:id', component:PersonajesComponent},
    {path:'series/personajes/details/:idSerie/:idPersonaje', component:DetailsPersonajesComponent},
];
