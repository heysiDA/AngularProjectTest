import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/domain/heroe';
import { HeroeService } from 'src/app/services/heroe.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Heroe[] = [];
  listOfCountries : any[];
  constructor(private heroeService: HeroeService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroeService.getHeroes().subscribe(heroes => this.listOfCountries = heroes.slice(0, 4));
  }
}
