import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { AboutModel } from './../shared/models/aboutModel';
import { AboutService } from './about.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilterPagination } from './../shared/models/filter-pagination';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit, OnDestroy {

  public articles: AboutModel[];
  public unsubscribe: BehaviorSubject<any> = new BehaviorSubject<any>('');
  // pagination
  public page: number = null;
  public pageSize: number;
  public collectionSize: number;
  public filter: FilterPagination = new FilterPagination();

  constructor(public elementRef: ElementRef,
              private aboutService: AboutService) {}

  ngOnInit() {
    this.aboutService.getArticles(this.filter).subscribe(res => this.articles = res);
    this.aboutService.getTotalItems().subscribe(res => {
      this.collectionSize = res;
    });
    this.page = this.filter.page;
    this.pageSize = this.filter.itemsPerPage;
   }

  ngOnDestroy() {
    this.unsubscribe.complete();
    this.unsubscribe.next('');
   }

  public sortByTags(e) {
    const sortValue = e.target.innerHTML.trim();
    const sorted = [];
    const unsorted = [];
    this.articles.forEach((el, i) => {
      if (el.tags.find(() => el.tags.includes(sortValue))) {
        sorted.push(el);
      } else {
        unsorted.push(el);
      }
    });
    return this.articles = sorted.concat(unsorted);
  }

  public getArticles(filter): AboutModel[] {
    let articles: AboutModel[];
    this.aboutService.getArticles(filter).subscribe((d: Array<AboutModel>) => {
      if (d) {
        articles = d;
      }
    });
    return articles;
  }

  public onPageChange(e) {
    this.filter.page = e;
    this.aboutService.getArticles(this.filter).subscribe(res => this.articles = res);
  }
}
