import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import {ComponentCommunicationService} from 'src/app/services/component-communication.service'

@Component({
  selector: 'app-autocomplete-combo',
  templateUrl: './autocomplete-combo.component.html',
  styleUrls: ['./autocomplete-combo.component.css']
})
export class AutocompleteComboComponent implements OnInit {

  val: any;
  results: any[];

  constructor(private countriesService: CountriesService,private communication : ComponentCommunicationService) { }

  ngOnInit() {
    //this.text="Select";
  }

  search(event) {
    console.log(event);
    this.countriesService.getCountry(event.query).subscribe(data => this.results = data);
    
  } 
  saveData(event){
    console.log(event.name);
    this.communication.saveCountryName(event.name)
  }
  handleDropdown(event) {
    //event.query = current value in input field
  }
}
