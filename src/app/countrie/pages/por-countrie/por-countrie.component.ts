import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-countrie',
  templateUrl: './por-countrie.component.html',
  styleUrls: ['./por-countrie.component.css']
})
export class PorCountrieComponent implements OnInit {

  termino: string = ''; 

  constructor() { }

  ngOnInit(): void {
  }

    search(): void {
      console.log(this.termino)
    }


}
