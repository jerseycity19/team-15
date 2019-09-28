import { Component, OnInit } from '@angular/core';
import { FormsServiceService } from 'src/app/services/forms-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-q6',
  templateUrl: './q6.component.html',
  styleUrls: ['./q6.component.css']
})
export class Q6Component {

  selectedValue: string;
  constructor(private formsService: FormsServiceService, private route: Router) {}
  value = 88;

  onClick() {
    this.formsService.person.q6 = this.selectedValue;
    this.route.navigateByUrl('q7');
  }

}
