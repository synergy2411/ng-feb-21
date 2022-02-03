import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../model/user.model';
import { AuthService } from './auth.service';

@Injectable()
export class DataService {
  private baseUrl =
    'https://ng-feb-22-default-rtdb.firebaseio.com/userdata.json';

  constructor(
    private http: HttpClient,
    private authService : AuthService
    ) {}

  getUserData() : Observable<Array<IUser>> {
    return this.http.get<Array<IUser>>(this.baseUrl, {
      params : new HttpParams().set("auth", this.authService.getToken())
    })
  }
}
