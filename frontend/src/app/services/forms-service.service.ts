import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})

export class FormsServiceService {

  constructor() { }

  person: Person = new Person();
}
