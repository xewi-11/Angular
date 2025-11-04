import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Primercomponent } from './components/primercomponent/primercomponent';

@NgModule({
  declarations: [
    App,
    Primercomponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
