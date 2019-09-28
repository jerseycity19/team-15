import { Component, OnInit } from '@angular/core';
import { FormsServiceService } from 'src/app/services/forms-service.service';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-q7',
  templateUrl: './q7.component.html',
  styleUrls: ['./q7.component.css']
})
export class Q7Component {

  selectedValue: string;
  constructor(private formsService: FormsServiceService, private route: Router, private httpService: HttpService) {}
  value = 100;

  onClick() {
    this.formsService.person.q7 = this.selectedValue;
    this.route.navigateByUrl('q2');
    this.httpService.sendData(this.formsService.person)
      .subscribe(data => {
        console.log(this.formsService.person);
    });
  }

}
