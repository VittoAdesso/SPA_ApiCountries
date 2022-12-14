import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorCountrieComponent } from './pages/por-countrie/por-countrie.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { SeeCountrieComponent } from './pages/see-countrie/see-countrie.component';
import { RouterModule } from '@angular/router';
import { TableCountryComponent } from './components/table-country/table-country.component';
import { CountryInputComponent } from './components/country-input/country-input.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorCountrieComponent,
    PorRegionComponent,
    SeeCountrieComponent,
    TableCountryComponent,
    CountryInputComponent
  ],
  exports: [
    PorCapitalComponent,
    PorCountrieComponent,
    PorRegionComponent,
    SeeCountrieComponent,
    TableCountryComponent,
    CountryInputComponent
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule
  ]
})
export class CountrieModule { }
