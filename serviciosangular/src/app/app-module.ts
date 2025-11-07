import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { PersonasapiComponent } from './components/personasapi.component/personasapi.component';
import { ServicePersonas } from './services/service.personas';
import { PersonastandaloneComponent } from './components/personastandalone.component/personastandalone.component';

@NgModule({
  declarations: [
    App,
    PersonasapiComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonastandaloneComponent
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),provideHttpClient(),ServicePersonas
  ],
  bootstrap: [App]
})
export class AppModule { }
