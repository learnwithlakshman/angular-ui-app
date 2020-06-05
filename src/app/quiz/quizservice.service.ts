import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from './model/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizserviceService {

  constructor(private http: HttpClient) { }

  loadQuizData(){
    return this.http.get<Quiz>('../../assets/quiz.json');
  }
}
