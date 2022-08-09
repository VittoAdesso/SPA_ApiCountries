import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countrie.interface';

@Injectable({
  providedIn: 'root'
})
export class CountrieService {

  private apiUrl: string = 'https://restcountries.com/v3.1'; 

  constructor(private http : HttpClient) { }

  countrieSearch( inputResult : string ) : Observable <Country[]> {
    const url = `${ this.apiUrl }/name/${inputResult}`;
    return this.http.get<Country[]>(url); 
  }

  capitalSearch( inputResult : string ) : Observable <Country[]> {
    const url = `${ this.apiUrl }/capital/${inputResult}`;
    return this.http.get<Country[]>(url); 
  }


}
