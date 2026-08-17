import { Component, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonTextarea, IonButton, IonButtons, IonBackButton, IonItem } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CommunityService } from 'src/app/services/community';
import { SavingProfile } from 'src/app/services/savingProfile';

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

  @ViewChild('fileInput')
  fileInput!: ElementRef;
  private saving = inject(SavingProfile);
  public communityService = inject(CommunityService);

  constructor(
    private router: Router,
  ) { }

  ngOnInit() { }

  selectImage() {
    this.fileInput.nativeElement.click();
  }

  imageSelected(event: any) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.selectedImage = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  async publishQuestion() {
    if (this.title === "") {
      return;
    }

    const newQuestion = {
      id: Date.now(),
      user: "Du",
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

