import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountrieService } from '../../services/countrie.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: []
})
export class PorRegionComponent implements OnInit {

  constructor( private activateRoute: ActivatedRoute, private countryService: CountrieService ) { }

  ngOnInit(): void {
    this.activateRoute.params
      .subscribe( ({id}) => {
      console.log(id);

      this.countryService.getRegionById(id).subscribe( region => {
        console.log(region);
      })
    })
  }

}
