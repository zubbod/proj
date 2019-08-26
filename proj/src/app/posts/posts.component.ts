import { Component, OnInit } from '@angular/core';

export interface IPost {
  title: string;
  text: string;
  id?: number;
}

export class Post implements IPost {
  title: string;
  text: string;
  id?: number;

  constructor() {
    this.text = '';
    this.title = '';
  }
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts: Post[] = [
    {title: 'First post', text: 'This is first post description'},
    {title: 'Second post', text: 'And any other description'}
  ];

  constructor() { }

  ngOnInit() {
  }

  public createPost(e) {
    this.posts.unshift(e);
  }

}
