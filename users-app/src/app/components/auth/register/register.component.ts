import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    this.hasExclamationMark
  ]);
  registerForm : FormGroup;
  courses = new FormArray([]);

  hobbies = new FormArray([]);

  addHobby(){
    const hobby = new FormGroup({
      name : new FormControl(''),
      frequency : new FormControl('')
    })
    this.hobbies.push(hobby);
  }

  addCourse(){
    debugger;
    this.courses.push(new FormControl(''))
    console.log(this.courses);
  }

  removeCourse(index: number){
    this.courses.removeAt(index);
  }

  constructor(
    private fb : FormBuilder,
    private authService : AuthService
    ) {
    this.registerForm = this.fb.group({
      username : this.username,
      password : this.password,
      skills : new FormArray([])
    })
   }

   get skills(){
     return this.registerForm.get("skills") as FormArray;
   }

   addSkills(){
     this.skills.push(new FormControl(''))
   }

   onRegister(){
     console.log(this.registerForm);
     const {username, password} = this.registerForm.value;
     this.authService.onRegister(username, password)
   }

  ngOnInit(): void {
  }

  hasExclamationMark(control : AbstractControl) : null | ValidationErrors{
    const hasExclamation = control.value.indexOf("!") >= 0;
    return hasExclamation ? null : {needExclamation : true}
  }

  shouldLeave(){
    if(confirm("Are you sure to leave this page?")){
      return true;
    }else{
      return false;
    }
  }

}
