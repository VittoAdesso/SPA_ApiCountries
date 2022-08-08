import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorCapitalComponent } from './countrie/pages/por-capital/por-capital.component';
import { PorCountrieComponent } from './countrie/pages/por-countrie/por-countrie.component';
import { PorRegionComponent } from './countrie/pages/por-region/por-region.component';
import { SeeCountrieComponent } from './countrie/pages/see-countrie/see-countrie.component';

const routes: Routes = [
  {
    path: '', 
    component: PorCountrieComponent, 
    pathMatch: 'full'
  }, 
  {
    path: 'region',
    component: PorRegionComponent
  }, 
  {
    path: 'capital',
    component: PorCapitalComponent
  }, 
  {
    path: 'pais/:id',
    component: SeeCountrieComponent
  }, 
  {
    path: '**',
    redirectTo: '' // or i can create 404Component
  }
];

@NgModule({ // is a decorator
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
