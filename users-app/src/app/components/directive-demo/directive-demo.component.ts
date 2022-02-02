import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent implements OnInit {

  myClasses = {'my-border' : true,'my-font' : false}
  username = "John Doe";

  onToggle(){
    this.myClasses['my-border'] = !this.myClasses['my-border']
    this.myClasses['my-font'] = !this.myClasses['my-font']
  }

  constructor() { }

  ngOnInit(): void {
  }

}
