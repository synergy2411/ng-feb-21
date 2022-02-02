import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent implements OnInit {

  constructor(private counterService : CounterService) { }

  ngOnInit(): void {
  }

  getCounter(){
    return this.counterService.counter;
  }

  getMainCounter(){
    return this.counterService.mainCounter;
  }
  increaseCounter(){
    // this.counterService.counter++;
    this.counterService.increaseCounter(1, "CompOne")
  }



}
