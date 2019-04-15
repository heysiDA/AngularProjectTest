import { Component, OnInit } from '@angular/core';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-autocomplete-combo',
  templateUrl: './autocomplete-combo.component.html',
  styleUrls: ['./autocomplete-combo.component.css']
})
export class AutocompleteComboComponent implements OnInit {

  text: string;
  results: string[];

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
  }

  search(event) {
    this.countriesService.getCountry(event.query).subscribe(data => {
        this.results = data[0];
    });
  } 
  handleDropdown(event) {
    //event.query = current value in input field
  }
}
