import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { App } from './app';
import { Primercomponent } from './components/primercomponent/primercomponent';
import { HooksangularComponent } from './components/hooksangular.component/hooksangular.component';
import { DeportesComponent } from './components/deportes.component/deportes.component';
import { Deportesv2Component } from './components/deportesv2.component/deportesv2.component';
import { FormsbindingComponent } from './components/formsbinding.component/formsbinding.component';
import { SumarnumerosComponent } from './components/sumarnumeros.component/sumarnumeros.component';
import { TestComponent } from '../components/components/test.component/test.component';
import { TablamultiplicarComponent } from '../components/components/tablamultiplicar.component/tablamultiplicar.component';


@NgModule({
  declarations: [
    App,
    Primercomponent,
    HooksangularComponent,
    DeportesComponent,
    Deportesv2Component,
    FormsbindingComponent,
    SumarnumerosComponent,
    TestComponent,
    TablamultiplicarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
