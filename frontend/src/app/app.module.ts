import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import { AppComponent } from './app.component';
import { SARFormComponent } from './components/sarform/sarform.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FirstScreenComponent } from './components/first-screen/first-screen.component';
import { ThirdScreenComponent } from './components/third-screen/third-screen.component';
import { QuestionByQuestionComponent } from './components/question-by-question/question-by-question.component';
import {AppRoutingModule} from './app-routing.module';
import {CheckboxModule, RadioButtonModule} from 'primeng/primeng';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {q1Component} from './components/q1/q1.component';
import {Q2Component} from "./components/q2/q2.component";
import {Q3Component} from "./components/q3/q3.component";
import {Q4Component} from "./components/q4/q4.component";
import {Q5Component} from "./components/q5/q5.component";
import {Q6Component} from "./components/q6/q6.component";
import {Q7Component} from "./components/q7/q7.component";
import { EndComponent } from './components/end/end.component';

@NgModule({
  declarations: [
    AppComponent,
    SARFormComponent,
    FirstScreenComponent,
    ThirdScreenComponent,
    q1Component,
      Q2Component,
      Q3Component,
      Q4Component,
      Q5Component,
      Q6Component,
      Q7Component,
    QuestionByQuestionComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DropdownModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ProgressBarModule,
    AppRoutingModule,
    CheckboxModule,
    HttpClientModule,
    RadioButtonModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
