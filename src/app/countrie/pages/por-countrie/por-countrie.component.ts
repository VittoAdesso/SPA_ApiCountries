import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countrie.interface';
import { CountrieService } from '../../services/countrie.service';

@Component({
  selector: 'app-por-countrie',
  templateUrl: './por-countrie.component.html',
  styleUrls: []
})
export class PorCountrieComponent implements OnInit {

  inputResult: string = ''; 
  haveError : boolean = false;
  countrie : Country[] = [];

  constructor( private countrieService: CountrieService) { }

  ngOnInit(): void {
  }

    
  search( inputResult: string): void {
    this.haveError = false;
    this.inputResult = inputResult;
    this.countrieService.capitalSearch( this.inputResult )
      .subscribe( 
        countriesResponse => {
          this.countrie = countriesResponse; 
    
      }, (err) => {
          this.haveError= true;
          this.countrie = []; 
      });
  }

  sugerencias( termino : string){
    this.haveError = false;
  }
}
