import { Component, OnInit } from '@angular/core';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsServiceService } from '../../services/forms-service.service';
import { HttpService } from '../../services/http.service';

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

  constructor(private formsService: FormsServiceService, private httpService: HttpService) {}

  onSubmit() {
    this.formsService.person.q1 = this.selectedValue;
    this.formsService.person.q2 = this.selectedValue2;
    this.formsService.person.q3 = this.selectedValue3;
    this.formsService.person.q4 = this.selectedValue4;
    this.formsService.person.q5 = this.selectedValue5;
    this.formsService.person.q6 = this.selectedValue6;
    this.formsService.person.q7 = this.selectedValue7;
    console.log(this.formsService.person);
    this.httpService.sendData(this.formsService.person)
      .subscribe(data => {
        console.log(this.formsService.person);
    });
  }
}
