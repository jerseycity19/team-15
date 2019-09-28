import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstScreenComponent} from './components/first-screen/first-screen.component';
import {SARFormComponent} from './components/sarform/sarform.component';
import { ThirdScreenComponent } from './components/third-screen/third-screen.component';
import { QuestionByQuestionComponent } from './components/question-by-question/question-by-question.component';
import { Q2Component } from './components/q2/q2.component';
import { Q3Component } from './components/q3/q3.component';
import { Q4Component } from './components/q4/q4.component';
import { Q5Component } from './components/q5/q5.component';
import { Q6Component } from './components/q6/q6.component';
import { Q7Component } from './components/q7/q7.component';
import { q1Component } from './components/q1/q1.component';

const routes: Routes = [
  {path: '', component: FirstScreenComponent},
  {path: 'secondPage', component: SARFormComponent},
  {path: 'q1', component: q1Component},
  {path: 'q2', component: Q2Component},
  {path: 'q3', component: Q3Component},
  {path: 'q4', component: Q4Component},
  {path: 'q5', component: Q5Component},
  {path: 'q6', component: Q6Component},
  {path: 'q7', component: Q7Component},
  {path: '3', component: ThirdScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
