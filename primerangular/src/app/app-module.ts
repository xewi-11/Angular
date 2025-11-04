import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Primercomponent } from './components/primercomponent/primercomponent';
import { HooksangularComponent } from './components/hooksangular.component/hooksangular.component';

@NgModule({
  declarations: [
    App,
    Primercomponent,
    HooksangularComponent
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
