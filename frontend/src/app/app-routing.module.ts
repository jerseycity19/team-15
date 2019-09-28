import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstScreenComponent} from './first-screen/first-screen.component';
import {SARFormComponent} from './sarform/sarform.component';

const routes: Routes = [
  {path: '', component: FirstScreenComponent},
  {path: 'secondPage', component: SARFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
