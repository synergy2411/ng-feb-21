import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user.model';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector : "app-users",
  templateUrl : `./users.component.html`,
  styleUrls : [`./users.component.css`]
})
export class UsersComponent implements OnInit{
  users : Array<IUser>;

  constructor(private dataService : DataService){}

  ngOnInit(): void {
      this.dataService.getUserData()
        .subscribe(users => this.users = users)
  }

  onMoreInfo(usr : IUser){
    alert(`Mr. ${usr.lastName} is working with ${usr.company}`)
  }
}
