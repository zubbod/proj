import { Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';
import { Post } from '../posts.component';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  @Input() post: Post;
  @ContentChild('info', { static: true }) infoRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }
}
