import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonTextarea, IonCard, IonCardContent, IonButtons, IonBackButton, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { CommunityService } from 'src/app/services/community';
import { SavingProfile } from 'src/app/services/savingProfile';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.page.html',
  styleUrls: ['./question-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonButton, IonTextarea, IonCard, IonCardContent, CommonModule, FormsModule, IonButtons, IonBackButton, IonIcon]
})

export class QuestionDetailPage implements OnInit {
  alertController = inject(AlertController);
  communityService = inject(CommunityService);
  savingProfile = inject(SavingProfile);

  question: any;
  newAnswer = "";

  constructor(
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {

    await this.communityService.loadData();

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.question = this.communityService.getQuestion(id);
    console.log('Frage:', this.question);
    console.log('Profil:', this.savingProfile.greenCare());
  }

 async sendAnswer() {
    if (!this.newAnswer.trim()) {
      return;
    }
    const profile = this.savingProfile.greenCare();
     this.question.answers.push({
    user: profile?.name,    userId: this.communityService.getCurrentUserId(),
    text: this.newAnswer
    });
    await this.communityService.updateQuestion(
      this.question.id,
      {
        answers: this.question.answers
      }
    );
    this.newAnswer = '';
  }

  isMyAnswer(answer: any): boolean {
    const profile = this.savingProfile.greenCare();
    return answer?.userId === profile?.userId;
  }


  async deleteAnswer(index: number) {
  const answer = this.question.answers[index];
  if (!answer) {
    return;
  }
  if (answer.user !== this.savingProfile.greenCare().name) {
    return;
  }
  this.question.answers.splice(index, 1);
  await this.communityService.updateQuestion(
    this.question.id,
    {
      answers: this.question.answers
    }
  );
}

  async delete(index: number) {
    const answer = this.question.answers[index];
    if (!this.isMyAnswer(answer)) {
      return;
    }
    const alert = await this.alertController.create({
      header: 'Antwort löschen?',
      message: 'Möchtest Du die Antwort wirklich löschen?',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel'
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.deleteAnswer(index);
          },
        },
      ],
    });
    await alert.present();
  }
}
