import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { AboutModel } from './../shared/models/aboutModel';
import { AboutService } from './about.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  public articles: AboutModel[];
  public unsubscribe: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor(public elementRef: ElementRef,
              private _aboutService: AboutService) { 
    this.articles;
   }

  ngOnInit() {
    this._aboutService.getArticles().subscribe((d: Array<AboutModel>) => {
      this.articles = d;
    })
   }

  ngOnDestroy() {
    this.unsubscribe.complete();
    this.unsubscribe.next('');
   }

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
