import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonButtons, IonBackButton, IonItem } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CommunityService } from 'src/app/services/community';
import { SavingProfile } from 'src/app/services/savingProfile';
import { Camera, CameraResultType } from '@capacitor/camera';


@Component({
  selector: 'app-new-tip',
  templateUrl: './new-tip.page.html',
  styleUrls: ['./new-tip.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonButtons, IonBackButton, IonItem, CommonModule, FormsModule]
})

export class NewTipPage implements OnInit {
  selectedImage = "";
  title = "";
  description = "";

  private saving = inject(SavingProfile);
  public communityService = inject(CommunityService);

  constructor(
    private router: Router,
  ) { }

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

  async publishTip() {
    if (this.title === "") {
      return
    } else {
      const newTip = {
        id: Date.now(),
        user: this.saving.greenCare().name,
        image: this.selectedImage,
        title: this.title,
        description: this.description,
        tip: 0,
        likes: 0,
        liked: false
      };
      await this.communityService.addTip(newTip);
      this.saving.postsUp();
      this.router.navigate(['/tabs/community']);
    }
  }
}

