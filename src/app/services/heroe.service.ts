import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Heroe } from 'src/app/domain/heroe';
import { HEROES } from 'src/app/domain/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  private heroesUrl = 'https://restcountries.eu/rest/v2/';  // URL to web api

  // getHeroes(): Observable<Heroe[]> {
  //   // this.messageService.add('HeroService: fetched heroes');
  //   return of(HEROES);
  // }
  getHeroes(): Observable<any[]> {
    return this.http.get<any[]>(this.heroesUrl +'all')
  }

  getHeroe(name: string): Observable<any> {
    // TODO: send the message _after_ fetching the hero
    // this.messageService.add(`HeroeService: fetched hero name=${name}`);
    //console.log(this.heroesUrl +'name/'+ name);
    //console.log(this.http.get<any>(this.heroesUrl +'name/'+ name));    
    return this.http.get<any>(this.heroesUrl +'name/'+ name);
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  constructor(private http: HttpClient, private messageService: MessageService) { }
  
}
