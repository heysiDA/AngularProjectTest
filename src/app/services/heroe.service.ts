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
  constructor(private messageService: MessageService) { }
  
}
