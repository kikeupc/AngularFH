import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];
  public initialValue: string = '';

  ngOnInit(): void {
    this.countries=this.countriesService.cacheStore.byCountries.countries;
    this.initialValue=this.countriesService.cacheStore.byCountries.term;
  }  

  constructor( private countriesService: CountriesService ){}

  searchByCountry( term: string ): void{
    this.countriesService.searchCountry( term )
    .subscribe( countries => {
     this.countries = countries;
    } );
  }

}
