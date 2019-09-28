import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Person} from "../models/person.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  url: string = '';

  sendData(person: Person) {
    return this.http.put(this.url, person);
  }
}
