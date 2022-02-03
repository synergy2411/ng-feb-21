import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("here the data comes")
    }, 3000);
  })

  contactNumber = 987654321;

  helloWorld = "Hello World"

  filteredStatus = '';

  todoCollection = [
    {label : "planting", status : 'completed'},
    {label : "insurance", status : 'pending'},
    {label : "shopping", status : 'completed'},
    {label : "grocery", status : 'pending'},
  ]

  onAddNewTodo(){
  //  Impure Change
    this.todoCollection.push({label : "New Item", status : "pending"})
    // Pure Change
    this.todoCollection = [
      {label : "planting", status : 'completed'},
      {label : "insurance", status : 'pending'},
      {label : "shopping", status : 'completed'},
      {label : "grocery", status : 'pending'},
      {label : "New ITem", status : "completed"}
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
