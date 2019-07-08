import { Component, OnInit, ElementRef } from '@angular/core';
import { AboutModel } from '../shared/models/aboutModel';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public articles: AboutModel[] = [];

  constructor(public elementRef: ElementRef) { 
    this.articles = [
      {
        id: 1,
        title: 'First Title',
        tags: ['html'],
        description: 'у меня такая ошибка со ")" была искал долго, но таки'
      },
      {
        id: 2,
        title: 'Second Title',
        tags: ['html', 'css'],
        description: 'была искал долго, но таки выловил. суть была в **. консоль '
      },
      {
        id: 3,
        title: 'Third Title',
        tags: ['html', 'js', 'Angular'],
        description: 'PS. до чего у вас тут тупая система отправки сообщений '
      },
      {
        id: 4,
        title: 'Fourth Title',
        tags: ['scss', 'knockaut'],
        description: 'одмины, относитесь внимательнее к пользователям. чай не дрова везёте )'
      },
    ]
   }

  ngOnInit() { }

  public sortByTags(e) {
    const sortValue = e.target.innerHTML.trim();
    let sorted = [];
    let unsorted = [];
    this.articles.forEach((el, i) => {
      if(el.tags.find(() => el.tags.includes(sortValue))) {
        sorted.push(el);
      } else {
        unsorted.push(el);
      };
    });
    return this.articles = sorted.concat(unsorted);
  }
}
