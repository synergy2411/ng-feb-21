import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  counter = 0;
  mainCounter = 0;

  increaseCounter(value : number, compName : string){
    this.counter += value;
    if(compName === 'CompOne'){
      this.mainCounter = this.counter;
    }
  }

  constructor() { }
}
