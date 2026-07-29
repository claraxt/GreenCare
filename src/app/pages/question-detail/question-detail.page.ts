import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonTextarea, IonCard, IonCardContent, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { CommunityService } from 'src/app/services/community';
@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.page.html',
  styleUrls: ['./question-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonTextarea, IonCard, IonCardContent, CommonModule, FormsModule, IonButtons, IonBackButton]
})
export class QuestionDetailPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public communityService: CommunityService
  ) { }

  async ngOnInit() {
    await this.communityService.loadData();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.question = this.communityService.getQuestion(id);
  }

  question: any;

  newAnswer = "";
  sendAnswer() {
    this.question.answers.push(
      {
        user: "Du",
        text: this.newAnswer
      }
    );

    this.communityService.saveData(); 
    this.newAnswer = "";
  }

  deleteAnswer(index: number) {
    this.question.answers.splice(index,1);
    this.communityService.saveData();
  }

}
