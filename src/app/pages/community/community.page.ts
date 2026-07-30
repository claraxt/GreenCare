import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonCard,
  IonCardContent,
  IonButton,
  IonIcon,
  AlertController,
} from '@ionic/angular/standalone';

import { CommunityService } from 'src/app/services/community';
import { PlantService } from 'src/app/services/plant.service';

import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonCard,
    IonCardContent,
    IonButton,
    IonIcon,
    CommonModule,
    FormsModule
  ]
})
export class CommunityPage implements OnInit {
  private router = inject(Router);
  public communityService = inject(CommunityService);
  public plantService = inject(PlantService);
  alertController = inject(AlertController);

  selectedSegment = 'fragen';

  posts: any[] = [];
  plants: any[] = [];

  async ngOnInit() {
    await this.communityService.loadData();
    const segment = await Preferences.get({
      key: 'communitySegment'
    });
    if (segment.value) {
      this.selectedSegment = segment.value;
    }
    this.segmentChanged();
    //this.plants = await this.plantService.plantInfo();
    this.plants = await this.plantService.getAllPlants();
  }

  segmentChanged() {

    if (this.selectedSegment == "fragen") {
      this.posts = this.communityService.questions;
    }

    if (this.selectedSegment == "tipps") {
      this.posts = this.communityService.tips;
    }
    Preferences.set({
      key: 'communitySegment',
      value: this.selectedSegment
    });

  }

  newPost() {

    this.router.navigate(['/new-question']);

  }

  newTip() {

    this.router.navigate(['/new-tip']);

  }

  openQuestion(id: number) {

    this.router.navigate(['/question', id]);

  }

  deleteQuestion(id: number) {

    this.communityService.deleteQuestion(id);

    this.posts = this.communityService.questions;

  }
  async deleteQ(id: any) {
    const alert = await this.alertController.create({
      header: 'Frage löschen?',
      message: 'Möchtest Du die Frage wirklich löschen?',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.deleteQuestion(id);

          },
        },
      ],
    });

    await alert.present();
  }

  openTip(id: number) {

    this.router.navigate(['/tip', id]);

  }

  deleteTip(id: number) {

    this.communityService.deleteTip(id);

    this.posts = this.communityService.tips;

  }
  async deleteT(id: any) {
    const alert = await this.alertController.create({
      header: 'Tipp löschen?',
      message: 'Möchtest Du den Tipp wirklich löschen?',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.deleteTip(id);

          },
        },
      ],
    });

    await alert.present();
  }


  openLexicon(id: number) {
    this.router.navigate(['/lexicon-detail', id]);
  }

}