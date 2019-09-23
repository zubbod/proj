import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

export interface ListItem {
  title: string;
  id: string;
  src: string;
}

export interface Sorting {
  key: number;
  value: string;
}

export enum SortByEnum {
  Title = 1,
  Id = 2,
}

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})

export class DirectivesComponent implements OnInit {
  public sortBy: SortByEnum = SortByEnum.Id;
  public sortText: string;
  public url = './assets/img/';
  public isVisible = false;
  public list: ListItem[] = [
    {title: 'кот', id: '1', src: `${this.url}cat.jpg`},
    {title: 'пес', id: '2', src: `${this.url}dog.jpg`},
    {title: 'белка', id: '3', src: `${this.url}belka.jpg`},
    {title: 'бурундук', id: '4', src: `${this.url}burunduk.jpg`},
    {title: 'бегемот', id: '5', src: `${this.url}бегемот.jpg`},
    {title: 'горилла', id: '6', src: `${this.url}горилла.jpg`},
    {title: 'жираф', id: '7', src: `${this.url}жираф.jpg`},
    {title: 'лев', id: '8', src: `${this.url}лев.jpg`},
    {title: 'пантера', id: '9', src: `${this.url}пантера.jpg`},
    {title: 'кит', id: '10', src: `${this.url}кит.jpg`},
  ];
  public sortEnum: Sorting[] = [
    {key: 1, value: 'Sort by title'},
    {key: 2, value: 'Sort by id'}
  ];

  @ViewChild('text', {static: true}) textInpRef: ElementRef;

  constructor() { }

  ngOnInit() {
    this.textInpRef.nativeElement.focus();
  }

  public onSortRadioChange(key: number): void {
    switch (key) {
      case SortByEnum.Id:
        this.sortBy = SortByEnum.Id;
        break;
      case SortByEnum.Title:
        this.sortBy = SortByEnum.Title;
        break;
    }
    this.textInpRef.nativeElement.focus();
  }

}
