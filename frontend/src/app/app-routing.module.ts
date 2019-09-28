import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstScreenComponent} from './first-screen/first-screen.component';
import {SARFormComponent} from './sarform/sarform.component';
import { ThirdScreenComponent } from './third-screen/third-screen.component';
import { QuestionByQuestionComponent } from './question-by-question/question-by-question.component';

const routes: Routes = [
  {path: '', component: FirstScreenComponent},
  {path: 'secondPage', component: SARFormComponent},
  {path: '3', component: ThirdScreenComponent},
  {path: '4', component: QuestionByQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
