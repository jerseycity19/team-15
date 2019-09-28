import { Component, OnInit } from '@angular/core';
import { FormsServiceService } from 'src/app/services/forms-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-q5',
  templateUrl: './q5.component.html',
  styleUrls: ['./q5.component.css']
})
export class Q5Component {

  selectedValue: string;
  constructor(private formsService: FormsServiceService, private route: Router) {}
  value = 77;

  onClick() {
    this.formsService.person.q5 = this.selectedValue;
    this.route.navigateByUrl('q6');
  }

  onBack() {
    this.route.navigateByUrl('q4');
  }

}
