import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token : string = null;

  constructor() { }

  onRegister(email : string, password : string){
    firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(response => {
        console.log("Regitered Successfully")
      }).catch(err => console.log(err))
  }

  onLogin(email : string, password : string){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase.auth().currentUser.getIdToken()
          .then(token => {
            console.log("[TOKEN]", token);
            this.token = token;
          }).catch(err => console.log(err))
      }).catch(err => console.log(err))
  }

  onLogout(){
    firebase.auth().signOut()
      .then(response => {
        this.token = null;
      });
  }

  isAuthenticated(){
    return this.token != null;
  }

  getToken(){
    return this.token;
  }

}
