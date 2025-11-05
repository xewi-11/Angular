import { routing,appRoutingProviders } from '../app.routing';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { HomeComponent } from './components/home.component/home.component';
import { MusicaComponent } from './components/musica.component/musica.component';
import { CineComponent } from './components/cine.component/cine.component';
import { MenuComponent } from './components/menu.component/menu.component';
import { NotfoundComponent } from './components/notfound.component/notfound.component';
import { NumerodobleComponent } from './components/numerodoble.component/numerodoble.component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MusicaComponent,
    CineComponent,
    MenuComponent,
    NotfoundComponent,
    NumerodobleComponent
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
