import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationService } from 'src/app/services/component-communication.service'
import { CountryDescriptionService } from 'src/app/services/country-description.service'

@Component({
  selector: 'app-country-description',
  templateUrl: './country-description.component.html',
  styleUrls: ['./country-description.component.css']
})
export class CountryDescriptionComponent implements OnInit {
  countryName: string;
  country: any;

  constructor(private communication: ComponentCommunicationService, private descriptionService: CountryDescriptionService) { }

  ngOnInit() {
    this.communication.currentcountryName.subscribe(countryName => {
      this.countryName = countryName;
      this.getCountry();
    })
    console.log(this.countryName);

  }

  getCountry() {
    this.descriptionService.getCountry(this.countryName).subscribe(country => this.country = country[0])
  }
}
