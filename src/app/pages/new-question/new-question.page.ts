import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonTextarea, IonButton, IonButtons, IonBackButton, IonItem } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CommunityService } from 'src/app/services/community';
import { SavingProfile } from 'src/app/services/savingProfile';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.page.html',
  styleUrls: ['./new-question.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonTextarea, IonButton, IonButtons, IonBackButton, IonItem, CommonModule, FormsModule]
})

export class NewQuestionPage implements OnInit {
  selectedImage = "";
  title = "";
  description = "";

  private saving = inject(SavingProfile);
  public communityService = inject(CommunityService);
  private router = inject(Router);

  ngOnInit() { }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 70,
      allowEditing: false,
      resultType: CameraResultType.DataUrl
    });
    this.selectedImage = image.dataUrl!;
    console.log(this.selectedImage);
  }

  async publishQuestion() {
    if (this.title === "") {
      return;
    }

    const newQuestion = {
      id: Date.now(),
      user: this.saving.greenCare().name,
      image: this.selectedImage,
      title: this.title,
      description: this.description,
      answers: [],
      likes: 0,
      liked: false
    };

    await this.communityService.addQuestion(newQuestion);
    this.saving.postsUp();
    this.router.navigate(['/tabs/community']);
  }
}

