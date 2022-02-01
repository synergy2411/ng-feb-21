import { Component } from '@angular/core';


@Component({
  selector : "app-users",
  templateUrl : `./users.component.html`,
  styleUrls : [`./users.component.css`]
})
export class UsersComponent{
  user = {
    firstName : "bill",
    lastName : "gates",
    dob : new Date("Dec 21, 1965"),
    isWorking : true,
    company : "Microsoft",
    income : 50000,
    imagePath : "./assets/images/bill.jpg",
    votes : 120
  }

  onMoreInfo(usr : any){
    alert(`Mr. ${usr.lastName} is working with ${usr.company}`)
  }
}
