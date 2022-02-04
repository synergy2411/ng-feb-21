import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  USER_DATA = [
    {
      id: '1',
      email: 'test@test.com',
    },
    {
      id: '2',
      email: 'test2@test.com',
    },
  ];

  getUserdataUsingObservable(){
    return from(this.USER_DATA);
  }


  getUserDataUsingPromise(){
    return new Promise((resolve, reject) =>{
      resolve(this.USER_DATA);
    })
  }

  getUserData() {
    return this.USER_DATA;
  }
}
