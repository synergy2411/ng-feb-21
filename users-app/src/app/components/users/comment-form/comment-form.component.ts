import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comment } from 'src/app/model/comment.model';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  @Output() commentEvent = new EventEmitter<Comment>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddComment(form: NgForm){
    const {stars, body, author} = form.value
    const comment : Comment = { stars, body, author };
    this.commentEvent.emit(comment);
  }

}
