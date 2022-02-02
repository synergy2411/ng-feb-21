import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/model/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private postService : PostService) { }

  ngOnInit(): void {
  }

  onAddPost(myForm : NgForm){
    const { title, body } = myForm.value;
    const post : Post = {
      body,
      id : (Math.round(Math.random() * 1000) + Date.now()).toString(),
      title
    }
    this.postService.createPost(post)
      .subscribe(response =>{
        console.log("Posted!!")
        myForm.reset();
      })
  }

}
