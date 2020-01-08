import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespondTopHeadLines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http: HttpClient) { }

  getToHeadLines() {
    return this.http.get<RespondTopHeadLines>('https://newsapi.org/v2/top-headlines?country=us&apiKey=82e828d1ece242d4a247034a248f9c9d');
  }

}
