import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing,appRoutingProviders } from '../app.routing';
import { App } from './app';
import { ListaproductosComponent } from './components/listaproductos.component/listaproductos.component';
import { MenuComponent } from './components/menu.component/menu.component';
import { HijococheComponent } from './components/hijocoche.component/hijocoche.component';
import { PadrecocheComponent } from './components/padrecoche.component/padrecoche.component';
import { PadredeportesComponent } from './components/padredeportes.component/padredeportes.component';
import { HijodeportesComponent } from './components/hijodeportes.component/hijodeportes.component';

@NgModule({
  declarations: [
    App,
    ListaproductosComponent,
    MenuComponent,
    HijococheComponent,
    PadrecocheComponent,
    PadredeportesComponent,
    HijodeportesComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    appRoutingProviders
  ],
  bootstrap: [App]
})
export class AppModule { }
