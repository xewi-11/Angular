import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasapiComponent } from './components/personasapi.component/personasapi.component';

const routes: Routes = [
  {path: '', component: PersonasapiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
