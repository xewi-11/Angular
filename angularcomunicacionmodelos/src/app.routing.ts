 
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaproductosComponent } from './app/components/listaproductos.component/listaproductos.component';
import { HijococheComponent } from './app/components/hijocoche.component/hijocoche.component';
import { PadrecocheComponent } from './app/components/padrecoche.component/padrecoche.component';
import { PadredeportesComponent } from './app/components/padredeportes.component/padredeportes.component';

const routes: Routes = [
    { path: '', component: ListaproductosComponent },
    { path: 'coches', component: PadrecocheComponent },
    { path: 'deportes', component: PadredeportesComponent },
    
];

export const appRoutingProviders:any[] = [];
export const routing:ModuleWithProviders<any>=RouterModule.forRoot(routes);

 