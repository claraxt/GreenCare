import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButton, IonTitle, IonToolbar, IonButtons, IonBackButton, IonModal, IonDatetime, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { ExploreService } from '../../services/explore';
import { CalendarPage } from '../calendar/calendar.page';
import { SavingProfile } from 'src/app/services/savingProfile';
import { TaskCalendarService } from 'src/app/services/taskCalendar';


@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.page.html',
  styleUrls: ['./plant-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonButton, IonTitle, IonToolbar, IonButtons, IonBackButton, CommonModule, FormsModule, IonModal, IonDatetime, IonCard, IonCardContent]
})
export class PlantDetailPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  private saving = inject(SavingProfile);
  private taskService = inject(TaskCalendarService);
  private exploreService = inject(ExploreService);

  plant: any;
  chosenDate = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,) { }


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

    this.taskService.add(
      this.chosenDate,
      this.plant.description
    );

    this.modal.dismiss(null, 'confirm');
  }

  helping() {
    if (this.plant.peopleNeeded > 0) {
      this.plant.peopleNeeded--;
      this.saving.iHelpUp();
    }
  }


}


