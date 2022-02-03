import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string = null;

  constructor(private router: Router) {}

  onRegister(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log('Regitered Successfully');
      })
      .catch((err) => console.log(err));
  }

  onLogin(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token) => {
            console.log('[TOKEN]', token);
            this.token = token;
            // localStorage.setItem("token", JSON.stringify(token))
            this.router.navigate(['users']);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  onLogout() {
    firebase
      .auth()
      .signOut()
      .then((response) => {
        this.token = null;
        this.router.navigate(['login'])
      });
  }

  isAuthenticated() {
    return this.token != null;
  }

  getToken() {
    return this.token;
  }
}
