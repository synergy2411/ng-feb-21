import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  @Input() user : IUser;
  tab : number = 1;
  dynamicClasses = {'my-border' : true , 'my-feature' : false};
  dynamicStyles = {'text-decoration' : 'underline'};

  onToggleClasses(){
    this.dynamicStyles['text-decoration'] = "none";
    this.dynamicClasses['my-border'] =!this.dynamicClasses['my-border']
    this.dynamicClasses['my-feature'] =!this.dynamicClasses['my-feature']
  }
}
