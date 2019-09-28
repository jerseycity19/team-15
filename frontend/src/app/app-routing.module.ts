import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstScreenComponent} from './components/first-screen/first-screen.component';
import {SARFormComponent} from './components/sarform/sarform.component';
import { ThirdScreenComponent } from './components/third-screen/third-screen.component';
import { QuestionByQuestionComponent } from './components/question-by-question/question-by-question.component';

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
