import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class ComponentCommunicationService {

  private countryName = new BehaviorSubject<string>("default name");
  currentcountryName = this.countryName.asObservable();

  constructor() { }
  
  saveCountryName(name:string){
    console.log(name);
    this.countryName.next(name);  
  }
  
}
