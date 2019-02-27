import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menuheroes',
  templateUrl: './menuheroes.component.html',
  styleUrls: ['./menuheroes.component.css']
})
export class MenuheroesComponent implements OnInit {
  hero = 'Windstorm';
  
  constructor() { }

  ngOnInit() {
  }

}
