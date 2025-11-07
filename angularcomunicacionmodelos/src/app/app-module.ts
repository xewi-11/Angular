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
import { LibreriaComponent } from './components/libreria.component/libreria.component';
import { ComicComponent } from './components/comic.component/comic.component';
import { FormsModule } from '@angular/forms';
import { ServiceComics } from './services/service.comics';


@NgModule({
  declarations: [
    App,
    ListaproductosComponent,
    MenuComponent,
    HijococheComponent,
    PadrecocheComponent,
    PadredeportesComponent,
    HijodeportesComponent,
    LibreriaComponent,
    ComicComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    appRoutingProviders,
    ServiceComics,
  ],
  bootstrap: [App]
})
export class AppModule { }
