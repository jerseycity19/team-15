import { Component, OnInit } from '@angular/core';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsServiceService } from '../services/forms-service.service';

@Component({
  selector: 'app-question-by-question',
  templateUrl: './question-by-question.component.html',
  styleUrls: ['./question-by-question.component.css']
})
export class QuestionByQuestionComponent  {
  selectedValue: string;
  selectedValue2: string;
  selectedValue3: string;
  selectedValue4: string;
  selectedValue5: string;
  selectedValue6: string;
  selectedValue7: string;

  value = 50;

  constructor(private formsService: FormsServiceService) {}

  onSubmit() {
    this.formsService;
    console.log(this.selectedValue);
    console.log(this.selectedValue2);
    console.log(this.selectedValue3);
    console.log(this.selectedValue4);
    console.log(this.selectedValue5);
    console.log(this.selectedValue6);
    console.log(this.selectedValue7);
  }
}
