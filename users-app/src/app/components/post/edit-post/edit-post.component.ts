import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/model/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  @Input() post : Post;
  @Output() editPostEvent = new EventEmitter<boolean>();

  constructor(private postService : PostService) { }

  ngOnInit(): void {
  }

  onDelete(){
    this.postService.deletePost(this.post.id)
      .subscribe(response => {
        console.log(response)
        this.editPostEvent.emit(true);
      })
  }

  onEdit(){
    this.postService.editPost(this.post.id, this.post.body)
      .subscribe(response => {
        console.log(response);
        this.editPostEvent.emit(true);
      });
  }

}
