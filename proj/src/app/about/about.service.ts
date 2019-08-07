import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AboutModel } from '../shared/models/aboutModel';
import { FilterPagination } from '../shared/models/filter-pagination';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private apiUrl: string = 'api/articles';
  private articles: Observable<Array<AboutModel>>;

  constructor( private _http: HttpClient) { }

  public getArticles(filter: FilterPagination): Observable<Array<AboutModel>> {
    this.articles =  this._http.get<Array<AboutModel>>(this.apiUrl);
    return this.articles.pipe(
      map(art => {
        const start = filter.itemsPerPage * (filter.page - 1);
        const end = start + filter.itemsPerPage;
        return art.slice(start, end);
    }));
  }

  public getTotalItems = () => {
    return this.articles.pipe(
      map(articles => articles.length)
    );
  }
}
