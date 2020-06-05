import { Quiz } from './../model/quiz.model';
import { QuizserviceService } from './../quizservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizhome',
  templateUrl: './quizhome.component.html',
  styleUrls: ['./quizhome.component.css']
})
export class QuizhomeComponent implements OnInit {

  quizData: Quiz;

  constructor(private quizService: QuizserviceService) { }

  ngOnInit(): void {
    this.quizService.loadQuizData().subscribe(res=>{
      this.quizData = res;
    })
  }

}
