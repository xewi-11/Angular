
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/components/home.component/home.component';
import { CineComponent } from './app/components/cine.component/cine.component';
import { MusicaComponent } from './app/components/musica.component/musica.component';
import { NotfoundComponent } from './app/components/notfound.component/notfound.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cine', component:CineComponent },
    { path: 'musica', component: MusicaComponent },
    { path: '**', component: NotfoundComponent },
];


export const appRoutingProviders:any[] = [];
export const routing : ModuleWithProviders<any> =RouterModule.forRoot(routes);
