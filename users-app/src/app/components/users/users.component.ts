import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user.model';
import { USER_DATA } from 'src/app/model/mocks';

@Component({
  selector : "app-users",
  templateUrl : `./users.component.html`,
  styleUrls : [`./users.component.css`]
})
export class UsersComponent implements OnInit{
  users : Array<IUser>;

  ngOnInit(): void {
      this.users = USER_DATA
  }

  onMoreInfo(usr : IUser){
    alert(`Mr. ${usr.lastName} is working with ${usr.company}`)
  }
}
