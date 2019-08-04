import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AboutModel } from '../shared/models/aboutModel';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private apiUrl: string = 'api/articles';

  constructor( private _http: HttpClient) { }

  public getArticles(): Observable<Array<AboutModel>> {
    console.log(this._http.get<Array<AboutModel>>(this.apiUrl));
    
    return this._http.get<Array<AboutModel>>(this.apiUrl);
  }
}
