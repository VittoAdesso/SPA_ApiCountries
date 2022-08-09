import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countrie.interface';

@Component({
  selector: 'app-table-country',
  templateUrl: './table-country.component.html',
  styleUrls: []
})



export class TableCountryComponent implements OnInit {

  @Input() countrie : Country[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
