import { Component, OnInit } from '@angular/core';
import { FormsServiceService } from '../../services/forms-service.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})
export class q1Component {
  selectedValue: string;
  constructor(private formsService: FormsServiceService, private route: Router) {}
  value = 33;

  onClick() {
    this.formsService.person.q1 = this.selectedValue;
    this.route.navigateByUrl('q2');
  }
}
