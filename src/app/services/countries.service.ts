import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private countryUrl = 'https://restcountries.eu/rest/v2/';  // URL to web api
  
  constructor(private http: HttpClient) { }

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.countryUrl +'all')
  }

  getCountry(name: string): Observable<any> {     
    return this.http.get<any>(this.countryUrl +'name/'+ name);
  }
}
