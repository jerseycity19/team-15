import { Component, OnInit } from '@angular/core';
import { FormsServiceService } from 'src/app/services/forms-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-q4',
  templateUrl: './q4.component.html',
  styleUrls: ['./q4.component.css']
})
export class Q4Component {

  selectedValue: string;
  constructor(private formsService: FormsServiceService, private route: Router) {}
  value = 66;

  onClick() {
    this.formsService.person.q4 = this.selectedValue;
    this.route.navigateByUrl('q5');
  }
}
