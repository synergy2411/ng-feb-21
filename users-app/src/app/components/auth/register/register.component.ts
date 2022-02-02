import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

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
    this.courses.push(new FormControl(''))
    console.log(this.courses);
  }

  removeCourse(index: number){
    this.courses.removeAt(index);
  }

  constructor(private fb : FormBuilder) {
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
   }

  ngOnInit(): void {
  }

  hasExclamationMark(control : AbstractControl) : null | ValidationErrors{
    const hasExclamation = control.value.indexOf("!") >= 0;
    return hasExclamation ? null : {needExclamation : true}
  }

}
