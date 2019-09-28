import { Component, OnInit } from '@angular/core';
import { FormsServiceService } from '../services/forms-service.service';

@Component({
  selector: 'app-question-by-question',
  templateUrl: './question-by-question.component.html',
  styleUrls: ['./question-by-question.component.css']
})
export class QuestionByQuestionComponent  {

  value = 50;

  constructor(private formsService: FormsServiceService) {}

  onSubmit() {
    this.formsService;
  }
}
