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

  constructor(private heroeService: HeroeService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroeService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
