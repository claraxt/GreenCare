import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButton, IonTitle, IonToolbar, IonButtons, IonBackButton, IonModal, IonDatetime } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { ExploreService } from '../../services/explore';
import { CalendarPage } from '../calendar/calendar.page';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.page.html',
  styleUrls: ['./plant-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonButton, IonTitle, IonToolbar, IonButtons, IonBackButton, CommonModule, FormsModule, IonModal, IonDatetime]
})
export class PlantDetailPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

  plant: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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

  showOnMap() {

    this.router.navigate(
      ['/tabs/map'],
      {
        queryParams: {

          lat: this.plant.latitude,

          lng: this.plant.longitude

        }

      }

    );

  }
  onWillDismiss(event: any) {
    console.log(event);
  }

  cancel() {

    this.modal.dismiss(null, 'cancel');
  }


  confirm() {
    this.helping();
    this.modal.dismiss({


    }, 'confirm');

  }

  helping() {
    if (this.plant.peopleNeeded > 0) {
      this.plant.peopleNeeded--;
    }
  }


}


