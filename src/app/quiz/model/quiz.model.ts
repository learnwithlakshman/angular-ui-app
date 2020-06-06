export interface Quiz {

    quiz: string;
    questions: Question[];

}

export interface Question {
    qdata: string;
    options: string[];
    answer: string;
}

export interface Result{
  percentage:number,
  noofcorrect:number,
  noofwrong:number
}
