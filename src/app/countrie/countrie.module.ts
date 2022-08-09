import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorCountrieComponent } from './pages/por-countrie/por-countrie.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { SeeCountrieComponent } from './pages/see-countrie/see-countrie.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorCountrieComponent,
    PorRegionComponent,
    SeeCountrieComponent
  ],
  exports: [
    PorCapitalComponent,
    PorCountrieComponent,
    PorRegionComponent,
    SeeCountrieComponent
  ],
  imports: [
    CommonModule, 
    FormsModule
  ]
})
export class CountrieModule { }
