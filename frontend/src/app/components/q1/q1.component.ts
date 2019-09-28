import { Component, OnInit } from '@angular/core';
import { FormsServiceService } from '../../services/forms-service.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})
export class q1Component {
  selectedValue2: string;
  constructor(private formsService: FormsServiceService, private route: Router) {}

  onSubmit() {
    this.formsService.person.q2 = this.selectedValue2;
    console.log(this.formsService.person.q2);
    this.route.navigateByUrl('q2');

  }
}
