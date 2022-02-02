import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css'],
  // providers : [CounterService]
})
export class CompTwoComponent implements OnInit {

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
    this.counterService.increaseCounter(1, "CompTwo")
  }
}
