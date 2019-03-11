import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Heroe } from 'src/app/domain/heroe';
import { HeroeService } from 'src/app/services/heroe.service';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent implements OnInit {
  
  @Input() heroe: Heroe;
  pais:any;
  constructor(private route: ActivatedRoute,private heroeService: HeroeService,private location: Location) { }

  ngOnInit() {
    this.getHeroe();
    //console.log(this.pais);
  }
  getHeroe(): void {
    const name = this.route.snapshot.paramMap.get('name');
    //console.log(name);
    //heroes=>console.log(heroes)
    this.heroeService.getHeroe(name).subscribe(listOfCountries => this.pais = listOfCountries[0]); 
    //this.heroeService.getHeroe(name).subscribe(listOfCountries=>console.log(listOfCountries[0]));      
  }
  goBack(): void {
    this.location.back();
  }
}
