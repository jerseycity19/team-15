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
import {HttpClientModule} from "@angular/common/http";
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    SARFormComponent,
    FirstScreenComponent,
    ThirdScreenComponent,
    QuestionByQuestionComponent
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
