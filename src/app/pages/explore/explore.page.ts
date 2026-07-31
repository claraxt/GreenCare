import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ExploreService } from '../../services/explore';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonSegment, IonSegmentButton, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
  standalone: true,
  imports: [ IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonSegment, IonSegmentButton, IonCard, IonCardContent, CommonModule, FormsModule ]
})

export class ExplorePage implements OnInit {
  selectedSegment = 'vorgeschlagen';
  router = inject(Router);
  exploreService = inject(ExploreService);

  plants: any[] = [];
  
  async ngOnInit() {
    await this.exploreService.loadPlants();
    this.refreshPlants();
  }

  async ionViewWillEnter() {
    await this.exploreService.loadPlants();
    this.refreshPlants();
  }

  refreshPlants() {
    if (this.selectedSegment === 'vorgeschlagen') {
      this.plants = [...this.exploreService.plantsSuggested];
    }
    if (this.selectedSegment === 'naehe') {
      this.plants = [...this.exploreService.plantsNearby];
    }
    if (this.selectedSegment === 'neu') {
      this.plants = [...this.exploreService.plantsNew];
    }
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
    this.refreshPlants();
  }

  openPlantDetail(plant: any) {
    this.router.navigate(['/plant', plant.id]);
  }

}