import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
  user = { name : "Foo" };

  snippets = "Some Value <script>alert('XSS Attach')</script"
  externalUrl ="javascript:alert('Hello from external URL')"
  safeUrl: SafeResourceUrl;


  constructor(
      private authService : AuthService,
      private sanitize : DomSanitizer){
        this.safeUrl = this.sanitize.bypassSecurityTrustResourceUrl(this.externalUrl)
      }

  ngOnInit(): void {
      firebase.default.initializeApp({
        apiKey: "AIzaSyDfDfJjRQxpD83axRLl2NyZ3fVaVkCf22Y",
        authDomain: "ng-feb-22.firebaseapp.com"
      })
  }

  isUserAuthenticated(){
    return this.authService.isAuthenticated();
  }

  onImpureChange(){
    this.user.name = "Bar"
  }
  onPureChange(){
    this.user = { name : "Baz" }
  }
}
