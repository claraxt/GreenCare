import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonList, IonTitle, IonToolbar, IonItem, IonAvatar, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonText, IonIcon, IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonAvatar, IonLabel, IonCard, IonIcon, IonCardContent, IonCardHeader, IonCardTitle, IonText, IonCol, IonGrid, IonRow]
})
export class ProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
