import { Component, OnInit } from '@angular/core';
import { FormsServiceService } from 'src/app/services/forms-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-q3',
  templateUrl: './q3.component.html',
  styleUrls: ['./q3.component.css']
})
export class Q3Component {

  selectedValue: string;
  constructor(private formsService: FormsServiceService, private route: Router) {}
  value = 55;

  onClick() {
    this.formsService.person.q3 = this.selectedValue;
    this.route.navigateByUrl('q4');
  }

}
