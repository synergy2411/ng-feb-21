import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts : Array<Post>
  showAddPost : boolean = false;
  constructor(private postService : PostService) { }

  ngOnInit(): void {
    this.loadNotes()
  }

  private loadNotes(){
    this.postService.getPosts()
      .subscribe(response => this.posts = response)
  }

  onPostAdded(flag : boolean){
    this.loadNotes();
    this.showAddPost = false;
  }
}
