import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(private http: HttpClient) { }

  getStates(){
    return this.http.get<{name: string, abbreviation: string}[]>('./assets/states.json');
  }
}
