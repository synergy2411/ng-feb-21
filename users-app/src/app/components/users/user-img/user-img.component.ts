import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.css']
})
export class UserImgComponent{
  @Input() user : IUser;
  @Output() childEvent = new EventEmitter<IUser>()

  onBtnClick(){
    this.childEvent.emit(this.user)
  }
}
