import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';
import {FormGroup, FormControl } from '@angular/forms';
import {FormsServiceService} from '../services/forms-service.service';
@Component({
  selector: 'app-sarform',
  templateUrl: './sarform.component.html',
  styleUrls: ['./sarform.component.css']
})
export class SARFormComponent {

  profileForm = new FormGroup({
    userIdent: new FormControl(''),
    ageRange: new FormControl(''),
    gender: new FormControl(''),
    country: new FormControl(''),
    primaryProfessionalLang: new FormControl(''),

  });

  selectedCar: string;

  groupedCars: SelectItemGroup[];

  constructor(private formsService: FormsServiceService) {}

  userIdent: {label: string, value: string}[] =
    [
      {label: 'Scholar', value: 'Scholar'},
      {label: 'Student', value: 'Student'},
      {label: 'Administrator', value: 'Administrator'},
      {label: 'Non-university', value: 'Non-university'}
    ];

  ageRange: {label: string, value: string}[] =
    [
      {label: '20-29', value: '20-29'},
      {label: '30-39', value: '30-39'},
      {label: '40-49', value: '40-49'},
      {label: '50-59', value: '50-59'},
      {label: '60-69', value: '60-69'},
      {label: '70+', value: '70+'}
    ];

  gender: {label: string, value: string}[] =
    [
      {label: 'Male', value: 'Male'},
      {label: 'Female', value: 'Female'},
      {label: 'Nonbinary', value: 'Nonbinary'},

    ];

  country: {label: string, value: string}[] =
    [
      {label: 'United States', value: 'United States'},
      {label: 'China', value: 'China'},
      {label: 'Italy', value: 'Italy'},
      {label: 'Turkey', value: 'Turkey'},
      {label: 'Mexico', value: 'Mexico'},
      {label: 'Germany', value: 'Germany'},
      {label: 'Thailand', value: 'Thailand'},
      {label: 'United Kingdom', value: 'United Kingdom'}
    ];

  primaryProfessionalLang: {label: string, value: string}[] =
    [
      {label: 'English', value: 'English'},
      {label: 'Chinese', value: 'Chinese'},
      {label: 'Italian', value: 'Italian'},
      {label: 'Turkish', value: 'Turkish'},
      {label: 'Spanish', value: 'Spanish'},
      {label: 'German', value: 'German'},
      {label: 'Korean', value: 'Korean'},
      {label: 'Japanese', value: 'Japanese'}
    ];

    onSubmit() {
        console.log(this.formsService.checked);
        console.log(this.profileForm.value);
    }
}
