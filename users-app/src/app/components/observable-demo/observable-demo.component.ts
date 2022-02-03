import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, from, interval, of, fromEvent } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css'],
})
export class ObservableDemoComponent implements OnInit {
  obs$ = new Observable((observer) => {
    setTimeout(() => {
      observer.next('First Package');
    }, 2000);
    setTimeout(() => {
      observer.next('Second Package');
    }, 4000);
    setTimeout(() => {
      // observer.error(new Error("Something bad happened here"))
    }, 5000);
    setTimeout(() => {
      observer.next('Third Package');
    }, 6000);
    setTimeout(() => {
      observer.complete();
    }, 8000);
  });

  unSub$: Subscription;

  fruits = ["apple", "banana", "grapes", "guava"]

  fruits$ = from(this.fruits)

  of$ = of('Hello World', 32, 'test@testing.com', true)

  interval$ = interval(1000);

  fromEvent$ = fromEvent(document, "click")

  onSubscribe() {
    console.clear();
    this.fromEvent$.subscribe(console.log)

    // this.fruits$.subscribe(console.log);
    // this.unSub$ = this.interval$.subscribe(console.log);
    // this.of$.subscribe(console.log)


    // this.unSub$ = this.obs$.subscribe({
    //   next: (data) => console.log(data),
    //   error: (err) => console.log(err),
    //   complete: () => console.log('[COMPLETED]'),
    // });
  }

  onUnsubscribe() {
    this.unSub$.unsubscribe();
  }
  constructor() {}

  ngOnInit(): void {}
}
