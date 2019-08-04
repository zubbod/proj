import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { AboutModel } from '../shared/models/aboutModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements InMemoryDbService {
  createDb() {
    const articles = [
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
    {
      id: 5,
      title: 'dtty Title',
      tags: ['html'],
      description: 'у меня такая ошибка со ")" была искал долго, но таки'
    },
    {
      id: 6,
      title: 'wrtd Title',
      tags: ['html', 'css'],
      description: 'была искал долго, но таки выловил. суть была в **. консоль '
    },
    {
      id: 7,
      title: 'Twed Title',
      tags: ['html', 'js', 'Angular'],
      description: 'PS. до чего у вас тут тупая система отправки сообщений '
    },
    {
      id: 8,
      title: 'Fourth Title',
      tags: ['scss', 'knockaut'],
      description: 'одмины, относитесь внимательнее к пользователям. чай не дрова везёте )'
    },
    {
      id: 8,
      title: 'Fourth Title',
      tags: ['scss', 'knockaut'],
      description: 'одмины, относитесь внимательнее к пользователям. чай не дрова везёте )'
    }
  ];
   
    return {articles} ;
  }
  constructor() { }
}
