import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {FormsServiceService} from '../services/forms-service.service';

@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.css']
})
export class FirstScreenComponent implements OnInit {


  checked = false;

  constructor(private route: Router, private formsService: FormsServiceService) { }

  ngOnInit() {
  }

  navigate() {
    this.route.navigateByUrl('secondPage');
  }

}
