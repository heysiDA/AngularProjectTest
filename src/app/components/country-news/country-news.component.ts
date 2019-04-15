import { Component, OnInit } from '@angular/core';
import {ComponentCommunicationService} from 'src/app/services/component-communication.service'
import {CountryDescriptionService} from 'src/app/services/country-description.service'

@Component({
  selector: 'app-country-news',
  templateUrl: './country-news.component.html',
  styleUrls: ['./country-news.component.css']
})
export class CountryNewsComponent implements OnInit {
  countryName:string;
  country:any;

  constructor(private communication : ComponentCommunicationService, private descriptionService :CountryDescriptionService) { }

  ngOnInit() {
    this.communication.currentcountryName.subscribe(countryName => this.countryName = countryName)
    this.getCountry();
  }

  getCountry(){
    this.descriptionService.getCountry(this.countryName).subscribe(country => this.country = country[0])
  }

}
