import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Post } from '../posts.component';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  public post = new Post();

  @Output() onAddPost: EventEmitter<Post> = new EventEmitter<Post>();
  @ViewChild('title', {static: false}) titleRef: ElementRef;
  @ViewChild('text', {static: false}) textRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  public createPost() {
    if (this.post.title.trim() && this.post.text.trim()) {
      this.onAddPost.emit(this.post);
    }
    this.post = new Post();
  }

  public focusOnTitle() {
    this.titleRef.nativeElement.focus();
  }

  public focusOnText() {
    this.textRef.nativeElement.focus();
  }
}
