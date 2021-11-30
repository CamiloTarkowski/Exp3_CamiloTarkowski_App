import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  constructor(
    private http: HttpClient) { }
    getTopHeadLines(){
      return this.http.get<RespuestaToHeadLines>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1414f2a32e764f8794c9b56c3c67d424')
    }
}
