import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: []
})
export class CountryInputComponent implements OnInit{

  
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  
  debouncer: Subject<string> = new Subject();
  
  inputResult: string = ''; 
  
  ngOnInit() {
    this.debouncer
    .pipe( debounceTime(2000))
    .subscribe( valor =>{
      this.onDebounce.emit(valor);
    })
  }

 searchByInput (){
  this.onEnter.emit(this.inputResult);
 }

 teclaPresionada( event: any){
    this.debouncer.next( this.inputResult );
  // const valor = event.target.value;
  // console.log( valor );
 }

}
