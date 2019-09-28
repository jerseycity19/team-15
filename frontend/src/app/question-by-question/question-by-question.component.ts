import { Component, OnInit } from '@angular/core';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsServiceService } from '../services/forms-service.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-question-by-question',
  templateUrl: './question-by-question.component.html',
  styleUrls: ['./question-by-question.component.css']
})
export class QuestionByQuestionComponent  {
  selectedValue: string = 'val1';
  value = 50;

  constructor(private formsService: FormsServiceService, private httpService: HttpService) {}

  onSubmit() {
    this.formsService;
    this.httpService.sendData(this.formsService.person)
      .subscribe(data => {
    });
  }
}
