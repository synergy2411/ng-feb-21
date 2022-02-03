import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'users-app';
  showComp : boolean = true;

  constructor(private authService : AuthService){}

  ngOnInit(): void {
      firebase.default.initializeApp({
        apiKey: "AIzaSyDfDfJjRQxpD83axRLl2NyZ3fVaVkCf22Y",
        authDomain: "ng-feb-22.firebaseapp.com"
      })
  }

  isUserAuthenticated(){
    return this.authService.isAuthenticated();
  }

}
