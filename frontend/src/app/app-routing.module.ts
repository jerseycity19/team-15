import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstScreenComponent} from './components/first-screen/first-screen.component';
import {SARFormComponent} from './components/sarform/sarform.component';
import { ThirdScreenComponent } from './components/third-screen/third-screen.component';
import { QuestionByQuestionComponent } from './components/question-by-question/question-by-question.component';

const routes: Routes = [
  {path: '', component: FirstScreenComponent},
  {path: 'secondPage', component: SARFormComponent},
  {path: 'q2', component: q2Component},
  {path: 'q3', component: Q3Component},
  {path: 'q4', component: Q4Component},
  {path: 'q5', component: Q5Component},
  {path: 'q6', component: Q6Component},
  {path: 'q7', component: Q7Component},

  {path: '3', component: ThirdScreenComponent},
  {path: '4', component: QuestionByQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
