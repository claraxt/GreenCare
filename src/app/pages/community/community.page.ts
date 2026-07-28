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
  IonIcon
} from '@ionic/angular/standalone';

import { CommunityService } from 'src/app/services/community';
import { PlantService } from 'src/app/services/plant.service';

import { Router } from '@angular/router';


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

  selectedSegment = 'fragen';

  posts: any[] = [];
  plants: any[] = [];

  async ngOnInit() {

    this.posts = this.communityService.questions;
    this.plants = await this.plantService.plantInfo();


  }

  segmentChanged() {

    if (this.selectedSegment == "fragen") {

      this.posts = this.communityService.questions;

    }

    if (this.selectedSegment == "tipps") {

      this.posts = this.communityService.tips;

    }

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

  openTip(id: number) {

    this.router.navigate(['/tip', id]);

  }

  deleteTip(id: number) {

    this.communityService.deleteTip(id);

    this.posts = this.communityService.tips;

  }


  openLexicon(id: number) {
    this.router.navigate(['/lexicon-detail', id]);
  }

}