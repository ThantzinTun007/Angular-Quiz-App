import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private apiUrl = 'http://localhost:8080/api/quiz'

  constructor(private http : HttpClient) { }

  getQuestion(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  };
}
