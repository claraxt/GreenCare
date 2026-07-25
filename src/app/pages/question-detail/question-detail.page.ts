import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonTextarea } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { CommunityService } from 'src/app/services/community';
@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.page.html',
  styleUrls: ['./question-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton,IonItem, IonTextarea, CommonModule, FormsModule]
})
export class QuestionDetailPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public communityService: CommunityService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.question = this.communityService.getQuestion(id);
  }

  question: any;

  newAnswer="";
  sendAnswer(){
    this.question.answers.push(
      {
        user:"Du",
        text:this.newAnswer
      }
    );
    this.newAnswer="";
  }

}
