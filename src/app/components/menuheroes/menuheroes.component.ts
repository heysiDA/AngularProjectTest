import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Heroe } from 'src/app/domain/heroe';
// import { HEROES } from 'src/app/domain/mock-heroes';
import { HeroeService } from 'src/app/services/heroe.service';
import { log } from 'util';
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

  // heroes = HEROES;
  heroes: any[];
  listOfCountries : any[];
  // selectedHeroe: Heroe;

  constructor(private heroeService: HeroeService) { }

  ngOnInit() {
    this.getHeroes();
  }
  // onSelect(heroe: Heroe): void {
  //   this.selectedHeroe = heroe;
  // }

  // getHeroes(): void {
  //   this.heroeService.getHeroes().subscribe(heroes => this.heroes = heroes);
  //this.heroeService.getHeroes().subscribe(heroes => console.log(heroes));// para saber por consola l resultado
  // }
  getHeroes(): void {
    this.heroeService.getHeroes().subscribe(heroes => this.listOfCountries = heroes);
  }
}
