import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { Router } from '@angular/router';
import {SelectItemGroup} from 'primeng/api';
import {FormGroup, FormControl } from '@angular/forms';
import {FormsServiceService} from '../../services/forms-service.service';

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
    employmentStatus: new FormControl(''),
    discipleArea: new FormControl(''),
    sensitivityWork: new FormControl('')

  });

  value = 11;

  constructor(private formsService: FormsServiceService, private router: Router) {}

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
      {label: 'Japanese', value: 'Japanese'},
      {label: 'Arabic', value: 'Arabic'},
      {label: 'Urdu', value: 'Urdu'}
    ];

    employmentStatus: {label: string, value: string}[] =
        [
            {label: 'Tenure or Other Permanent Appointment', value: 'Tenure or Other Permanent Appointment'},
            {label: 'Full-Time Time-Limited Contract', value: 'Full-Time Time-Limited Contract'},
            {label: 'Adjunct or Part-Time Contract', value: 'Adjunct or Part-Time Contract'},
            {label: 'Part-Time No Contract', value: 'Part-Time No Contract'},
            {label: 'Not Employed', value: 'Not Employed'}
        ];

    discipleArea: {label: string, value: string}[] =
        [
            {label: 'Natural Sciences', value: 'Natural Sciences'},
            {label: 'Social Sciences', value: 'Social Sciences'},
            {label: 'Arts and Humanities', value: 'Arts and Humanities'},
            {label: 'Engineering', value: 'Engineering'},
            {label: 'Computer Science', value: 'Computer Science'},
            {label: 'Medicine', value: 'Medicine'},
            {label: 'Business/Finance', value: 'Business/Finance'},
            {label: 'Law/Human Rights', value: 'Law/Human Rights'},
            {label: 'Other', value: 'Other'}
        ];

    sensitivityWork: {label: string, value: string}[] =
        [
            {label: 'Not Very Sensitive', value: 'Not Very Sensitive'},
            {label: 'Somewhat Sensitive', value: 'Somewhat Sensitive'},
            {label: 'More Sensitive than Most', value: 'More Sensitive than Most'},
            {label: 'Extremely Sensitive', value: 'Extremely Sensitive'}
        ];

    onSubmit() {
        this.formsService.person.user = this.profileForm.value.userIdent;
        this.formsService.person.age = this.profileForm.value.ageRange;
        this.formsService.person.gender = this.profileForm.value.gender;
        this.formsService.person.country = this.profileForm.value.country;
        this.formsService.person.language = this.profileForm.value.primaryProfessionalLang;
        this.formsService.person.employment = this.profileForm.value.employmentStatus;
        this.formsService.person.disciple = this.profileForm.value.discipleArea;
        this.formsService.person.sensitivity = this.profileForm.value.sensitivityWork;
        console.log(this.formsService.person);
        this.router.navigateByUrl('3');
    }
}
