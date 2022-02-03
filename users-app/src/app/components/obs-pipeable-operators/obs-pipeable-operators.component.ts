import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, interval, merge } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, filter, map, mergeAll, skip, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-obs-pipeable-operators',
  templateUrl: './obs-pipeable-operators.component.html',
  styleUrls: ['./obs-pipeable-operators.component.css']
})
export class ObsPipeableOperatorsComponent implements OnInit, AfterViewInit {

  interval$ = interval(1000);
  fruits = ["apple", "banana", "grapes", "guava", "kiwi"];
  fruits$ = from(this.fruits);

  fromEvent$ = fromEvent(document, "click")

  gits = [];

  @ViewChild("search") txtSerach : ElementRef;

  ngAfterViewInit(): void {
    let changetext$ = fromEvent(this.txtSerach.nativeElement, "input")
    changetext$.pipe(
      debounceTime(1000),
      map((event : any) => event.target.value),
      map(searchTerm => {
        return ajax.getJSON(`https://api.github.com/users/${searchTerm}/repos`)
      }),
      mergeAll()
    ).subscribe((response : any) => {
      this.gits = response;
    })
  }

  onSubscribe(){





    // this.fromEvent$.pipe(
    //   map((event : any) => {
    //     return {x : event.clientX, y : event.clientY}
    //   }),
    //   filter(({x, y})=>{
    //     return y > 200
    //   })
    // ).subscribe(console.log)




    // this.fruits$.pipe(
    //   skip(1),
    //   take(3)
    // ).subscribe(console.log)



    // this.interval$.pipe(
    //   take(5),
    //   // tap(value => console.log("TAP - ",value)),
    //   filter(value => value < 3),
    //   map(value => "New Value " + value),
    //  ).subscribe(console.log)
  }

  constructor() { }

  ngOnInit(): void {
    console.clear()
  }

}
