import { Injectable } from '@angular/core';
import { Heroe } from 'src/app/domain/heroe';
import { HEROES } from 'src/app/domain/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  getHeroes(): Observable<Heroe[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  getHeroe(id: number): Observable<Heroe> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroeService: fetched hero id=${id}`);
    return of(HEROES.find(heroe => heroe.id === id));
  }
  constructor(private messageService: MessageService) { }
  
}
