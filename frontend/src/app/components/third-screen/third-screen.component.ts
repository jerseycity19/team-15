import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsServiceService } from 'src/app/services/forms-service.service';

@Component({
  selector: 'app-third-screen',
  templateUrl: './third-screen.component.html',
  styleUrls: ['./third-screen.component.css']
})
export class ThirdScreenComponent implements OnInit {

  constructor(private router: Router, private formsService: FormsServiceService) { }

  ngOnInit() {
  }

  onClick() {
    console.log(this.formsService.person);
    this.router.navigateByUrl('q1');
  }

  onBack() {
    this.router.navigateByUrl('secondPage');
  }

  value = 22;

}
