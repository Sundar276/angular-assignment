import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  API_URL = environment.API_URL;

  constructor( private http : HttpClient ) { }

  getPersons(){
    return this.http.get(this.API_URL + '/person');
  }

}
