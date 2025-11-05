import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { HomeComponent } from './components/home.component/home.component';
import { MusicaComponent } from './components/musica.component/musica.component';
import { CineComponent } from './components/cine.component/cine.component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MusicaComponent,
    CineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
