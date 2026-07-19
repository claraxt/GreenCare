import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButton, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { ExploreService } from '../../services/explore';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.page.html',
  styleUrls: ['./plant-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonButton, IonTitle, IonToolbar, IonButtons, IonBackButton, CommonModule, FormsModule]
})
export class PlantDetailPage implements OnInit {

    plant: any; 

  constructor(private route: ActivatedRoute,
    public exploreService: ExploreService) { }

 ngOnInit() {

   const id = Number(this.route.snapshot.paramMap.get('id'));

   const allPlants = [

   ...this.exploreService.plantsSuggested,

   ...this.exploreService.plantsNearby,

   ...this.exploreService.plantsNew

];

 this.plant = allPlants.find(p => p.id === id);

}

}
