export interface Quiz {

    quiz: string;
    questions: Question[];

}

export interface Question {
    question: string;
    options: string[];
    answer: string;
}