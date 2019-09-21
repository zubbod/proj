import { Component, OnInit } from '@angular/core';

export interface listItem {
  title: string;
  id: number;
  src: string
};

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})

export class DirectivesComponent implements OnInit {
  public url: string = 'https://github.com/zubbod/proj/blob/master/proj/src/assets/img/';
  public isVisible = false;
  public list: listItem[] = [
    {title: 'кот', id: 1, src: `${this.url}cat.jpg`},
    {title: 'пес', id: 2, src: `${this.url}dog.jpg`},
    {title: 'белка', id: 3, src: `${this.url}belka.jpg`},
    {title: 'бурундук', id: 4, src: `${this.url}burunduc.jpg`},
  ]

  constructor() { }

  ngOnInit() {
  }

}
