import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonContent, IonHeader, IonList, IonTitle, IonToolbar, IonItem, IonAvatar, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonText, IonIcon, IonCol, IonGrid, IonRow, IonTabButton, IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonInput, IonModal, IonTabBar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { OverlayEventDetail } from '@ionic/core/components';
import { Saving } from 'src/app/services/saving';
import { Camera } from '@capacitor/camera';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [RouterLink, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonAvatar, IonLabel, IonCard, IonIcon, IonCardContent, IonCardHeader, IonCardTitle, IonText, IonCol, IonGrid, IonRow, IonTabButton, IonAccordion, IonAccordionGroup, FormsModule, IonButton, IonButtons, IonInput, IonModal, IonTabBar]
})
export class ProfilePage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

  private greenCareService = inject(Saving);
  private alertController = inject(AlertController);

  placeholderImage = 'https://ionicframework.com/docs/img/demos/card-media.png';
  image: string = this.placeholderImage;

  constructor() { }

  ngOnInit() {
  }

  name!: string;
  description!: string;
  date!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    if (this.name === '') {
      return;
    } else {
      this.greenCareService.updateProfile(this.name, this.description, this.date);

      this.modal.dismiss(null, 'confirm');
    }
  }

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      this.name = '';
      this.description = '';
    }
  }

  greenCare() {
    return this.greenCareService.greenCare();
  }

  async chooseImage() {
    const alert = await this.alertController.create({
      header: 'Bild auswählen',
      buttons: [
        {
          text: 'Kamera',
          handler: () => this.takePicture(),
        },
        {
          text: 'Galerie',
          handler: () => this.pickFromGallery(),
        },
        {
          text: 'Abbrechen',
          role: 'cancel',
        },
      ],
    });

    await alert.present();
  }

  async takePicture() {
    try {
      const result = await Camera.takePhoto({
        quality: 90,
        includeMetadata: true,
      });

      if (result.webPath) //nur wenn result.webPath vorliegt, soll image = result.webPath sein, da result.webPath undefined sein kann und image als string definiert ist
      {
        this.image = result.webPath;
      }
      console.log('Image:', this.image);

    }
    catch (e) {
      console.error('Error:', e);
    }
  }
  async pickFromGallery() {
    try {
      const result = await Camera.pickImages({
        limit: 1
      });

      if (result.photos.length > 0) {
        this.image =
          result.photos[0].webPath ?? this.placeholderImage;

      }

      console.log('Image:', this.image);


    } catch (e) {
      console.error('Gallery Error:', e);
    }
  }
}
