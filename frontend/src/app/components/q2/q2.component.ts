import { Component, OnInit } from '@angular/core';
import { FormsServiceService } from 'src/app/services/forms-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.css']
})
export class Q2Component {

  selectedValue: string;
  constructor(private formsService: FormsServiceService, private route: Router) {}
  value = 44;

  onClick() {
    this.formsService.person.q2 = this.selectedValue;
    this.route.navigateByUrl('q3');
  }

  onBack() {
    this.route.navigateByUrl('q1');
  }
}
