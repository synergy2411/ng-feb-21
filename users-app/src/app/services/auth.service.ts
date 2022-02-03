import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
        console.log("Logged In")
        firebase.auth().currentUser.getIdToken()
          .then(token => {
            console.log("[TOKEN]", token);
          }).catch(err => console.log(err))
      }).catch(err => console.log(err))
  }

  onLogout(){
    return firebase.auth().signOut();
  }

  isAuthenticated(){

  }

}
