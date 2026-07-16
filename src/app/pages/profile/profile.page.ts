import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonContent, IonHeader, IonList, IonTitle, IonToolbar, IonItem, IonAvatar, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonText, IonIcon, IonCol, IonGrid, IonRow, IonTabButton, IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonInput, IonModal, IonTabBar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { OverlayEventDetail } from '@ionic/core/components';
import { Saving } from 'src/app/services/saving';
import { Camera, CameraResultType } from '@capacitor/camera';

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
  //private alertController = inject(AlertController);

  //placeholderImage = 'https://ionicframework.com/docs/img/demos/avatar.svg';


  constructor() { }

  ngOnInit() {
  }

  name: string = '';
  description: string = '';
  date: string = '';
  image: string = '';

  cancel() {
    this.name = '';
    this.description = '';
    this.image = '';
    this.modal.dismiss(null, 'cancel');
  }

  /*confirm() {
    if (this.name === '') {
      return;
    } else {
      this.greenCareService.updateProfile(this.name, this.description, this.date, this.image);

      this.modal.dismiss(null, 'confirm');
    }
  }*/
  confirm() {
    if (this.name === '') {
      return;
    } else {
      this.modal.dismiss({
        name: this.name,
        description: this.description,
        image: this.image,

      }, 'confirm');
    }
  }

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      const data = event.detail.data;
      this.greenCareService.updateProfile(
        data.name,
        data.description,
        this.greenCare().date,
        data.image,
      )
      this.name = '';
      this.description = '';
      this.image = '';
      console.log(event.detail.data);
    }
  }

  greenCare() {
    return this.greenCareService.greenCare();
  }

  async takePicture() {

    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl
    });

    this.image = image.dataUrl!;
    console.log(this.image);
  }
}
