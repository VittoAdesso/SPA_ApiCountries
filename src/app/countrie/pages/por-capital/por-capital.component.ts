import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../interfaces/countrie.interface';
import { CountrieService } from '../../services/countrie.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',

})
export class PorCapitalComponent implements OnInit {

  inputResult: string = ''; 
  haveError : boolean = false;
  capital : Country[] = [];

  constructor( private countrieService: CountrieService) { }


  ngOnInit(): void {
  }

  search( inputResult: string) {
    this.haveError = false;
    this.inputResult = inputResult;
    
    this.countrieService.capitalSearch( this.inputResult )
      .subscribe( 
        capitalResponse => {
          this.capital = capitalResponse; 
    
      }, (err) => {
          this.haveError= true;
          this.capital = []; 
      });
  }
}

