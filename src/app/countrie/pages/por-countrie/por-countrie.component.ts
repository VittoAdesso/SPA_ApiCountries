import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CountrieService } from '../../services/countrie.service';

@Component({
  selector: 'app-por-countrie',
  templateUrl: './por-countrie.component.html',
  styleUrls: []
})
export class PorCountrieComponent implements OnInit {

  inputResult: string = ''; 
  haveError : boolean = false;

  constructor( private countrieService: CountrieService) { }

  ngOnInit(): void {
  }

    search(): void {
      this.haveError = false;
      console.log(this.inputResult); 
      this.countrieService.countrieSearch( this.inputResult )
        .subscribe( countriesResponse => {
          console.log(countriesResponse);

      


        }, (err) => {
            this.haveError= true;
        });
    }


}
