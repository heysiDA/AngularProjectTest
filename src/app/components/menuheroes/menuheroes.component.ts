import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Heroe } from 'src/app/domain/heroe';
import { HEROES } from 'src/app/domain/mock-heroes';
@Component({
  selector: 'app-menuheroes',
  templateUrl: './menuheroes.component.html',
  styleUrls: ['./menuheroes.component.css']
})
export class MenuheroesComponent implements OnInit {
  // heroe: Heroe = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  heroes = HEROES;
  selectedHeroe: Heroe;

  constructor() { }

  ngOnInit() {
  }
  onSelect(heroe: Heroe): void {
    this.selectedHeroe = heroe;
  }
}
