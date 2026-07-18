import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonCard,
  IonCardContent,
  IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { person } from 'ionicons/icons';

import { ExploreService } from '../../services/explore';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonSegment,
    IonSegmentButton,
    IonCard,
    IonCardContent,
    IonIcon,
    CommonModule,
    FormsModule
  ]
})

export class ExplorePage implements OnInit {

  selectedSegment = 'vorgeschlagen';

  plants: any[] = [];

  constructor(
    private router: Router,
    public exploreService: ExploreService
  ) {

    addIcons({
      person
    });

  }

  ngOnInit() {

    this.plants = this.exploreService.plantsSuggested;

  }

  segmentChanged(event: any) {

    this.selectedSegment = event.detail.value;

    if (this.selectedSegment === 'vorgeschlagen') {

      this.plants = this.exploreService.plantsSuggested;

    }

    if (this.selectedSegment === 'naehe') {

      this.plants = this.exploreService.plantsNearby;

    }

    if (this.selectedSegment === 'neu') {

      this.plants = this.exploreService.plantsNew;

    }

  }

  openPlant(plant: any) {

    this.router.navigate(['/plant', plant.id]);

  }

}