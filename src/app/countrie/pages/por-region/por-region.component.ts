import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/countrie.interface';
import { CountrieService } from '../../services/countrie.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: []
})
export class PorRegionComponent implements OnInit {

  pais!: Country;

  constructor( private activateRoute: ActivatedRoute, private countryService: CountrieService ) { }

  ngOnInit(): void {

    this.activateRoute.params
      .pipe( 
        switchMap(({id}) => this.countryService.getRegionById(id)), 
        tap( console.log)
      )
        .subscribe( pais => this.pais = pais );
        }

    // second way, little longer
    // this.activateRoute.params
    //   .subscribe( ({id}) => {
    //   console.log(id);

    //   this.countryService.getRegionById(id).subscribe( region => {
    //     console.log(region);
    //   })
    // })

    
}

