import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonList, IonTitle, IonToolbar, IonItem, IonAvatar, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonText, IonIcon, IonCol, IonGrid, IonRow, IonTabButton, IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonInput, IonModal, IonTabBar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { OverlayEventDetail } from '@ionic/core/components';
import { Saving } from 'src/app/services/saving';
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
}
