import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Plant } from 'src/app/models/plant';

import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonSegment, IonSegmentButton, IonCard, IonCardContent, IonIcon
} from '@ionic/angular/standalone';



import { ExploreService } from '../../services/explore';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonSegment, IonSegmentButton, IonCard, IonCardContent, CommonModule, FormsModule
  ]
})
export class ExplorePage implements OnInit {

  selectedSegment = 'vorgeschlagen';

  router = inject(Router);
  exploreService = inject(ExploreService)

  plants: any[] = [];


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

  openPlantDetail(plant: any) {

    this.router.navigate(['/plant', plant.id]);

  }

}