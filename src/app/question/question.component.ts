import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../servie/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent implements OnInit {
  public name: string = '';
  public questionList: any = [];
  public currentQuestion: number = 0;
  public point: number = 0;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  isQuizComplete: boolean = false;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;
    this.getAllQuestions();
  }

  getAllQuestions() {
    this.questionService.getQuestion().subscribe((res) => {
      this.questionList = res;
      console.log(this.questionList);
    });
  }

  nextQuestions() {
    this.currentQuestion++;
  }

  previousQuestions() {
    this.currentQuestion--;
  }

  answer(currentQue: number, option: any) {
    if(currentQue === this.questionList.length){
      this.isQuizComplete = true;
    }
    if (option.is_correct) {
      this.point += 1;
      this.correctAnswer++;
      setTimeout(()=> {
        this.currentQuestion++;
      },1000 )

    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.inCorrectAnswer++;
      },500)
    }
    console.log(this.point);
  }
}
