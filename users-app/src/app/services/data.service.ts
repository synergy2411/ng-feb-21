import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../model/user.model';

@Injectable()
export class DataService {
  private baseUrl =
    'https://ng-feb-22-default-rtdb.firebaseio.com/userdata.json';

  constructor(private http: HttpClient) {}

  getUserData() : Observable<Array<IUser>> {
    return this.http.get<Array<IUser>>(this.baseUrl)
  }
}
