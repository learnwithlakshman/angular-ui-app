import { Quiz, Result } from './../model/quiz.model';
import { QuizserviceService } from './../quizservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizhome',
  templateUrl: './quizhome.component.html',
  styleUrls: ['./quizhome.component.css']
})
export class QuizhomeComponent implements OnInit {

  quiz: Quiz;
  result:Result;
  constructor(private quizService: QuizserviceService) { }

  ngOnInit(): void {
    this.quizService.loadQuizData().subscribe((res)=>{
      this.quiz = res;
    },error=>{
        alert("Quiz can not be started... something went");
    })
  }

  submitQuiz(f){
    let respData = f.value;

    let questions = this.quiz.questions;

    let kesy =   Object.keys(respData);
    let values = Object.values(respData);

    let c = 0;
    let w= 0;
    for(let i=0;i<questions.length;i++){
      if(questions[i].answer == values[i]){
          c++;
      }else{
          w++;
      }
    }
    let res = (c / questions.length) * 100;

    let i =0;
    let ele = setInterval(()=>{
        i++;
        this.result = {"percentage":i,"noofcorrect":c,"noofwrong":w};
        if(i >= res){
          clearInterval(ele);
        }
    },50)
    window.scroll(0,0);
    setTimeout(()=>{
      this.result = null;
    },8000)
    f.reset();
  }
  }


