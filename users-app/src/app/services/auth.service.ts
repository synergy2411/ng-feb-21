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

}
