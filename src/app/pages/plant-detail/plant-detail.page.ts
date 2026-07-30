import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonContent, IonHeader, IonButton, IonTitle, IonToolbar, IonButtons, IonBackButton, IonModal, IonDatetime, IonCard, IonCardContent, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { ExploreService } from '../../services/explore';
import { CalendarPage } from '../calendar/calendar.page';
import { SavingProfile } from 'src/app/services/savingProfile';
import { TaskCalendarService } from 'src/app/services/taskCalendar';
import { MapPage } from '../map/map.page';


@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.page.html',
  styleUrls: ['./plant-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonButton, IonTitle, IonToolbar, IonButtons, IonBackButton, CommonModule, FormsModule, IonModal, IonDatetime, IonCard, IonCardContent, IonIcon]
})
export class PlantDetailPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  private saving = inject(SavingProfile);
  private taskService = inject(TaskCalendarService);
  private exploreService = inject(ExploreService);



  showDates = [];
  plant: any;
  chosenDate = '';
  //mapMarkers: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,) { }


  async ngOnInit() {
    await this.exploreService.loadPlants();

    this.updateShowDates();

    const id = Number(this.route.snapshot.paramMap.get('id'));

    const allPlants = [

      ...this.exploreService.plantsSuggested,

      ...this.exploreService.plantsNearby,

      ...this.exploreService.plantsNew

    ];

    this.plant = allPlants.find(p => p.id === id);

  }

  updateShowDates() {
    this.showDates = this.taskService.task.map((task: any) => ({
      date: task.date.substring(0, 10),
      textColor: '#C8D4B0',
      backgroundColor: '#5F7F5A'
    }))
  }
  /*exploreSave() {
    return this.exploreService.exploreSave();
  }*/
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
    if (this.chosenDate === '') {
      return
    } else
      this.helping();

    this.taskService.add(
      this.chosenDate,
      this.plant.description,
      this.plant.name,
      this.plant.text,
      this.plant.id
    );
    this.exploreService.mapMarkers.push({
      lat: this.plant.latitude,
      lng: this.plant.longitude,
      name: this.plant.name
    });



    this.modal.dismiss(null, 'confirm');


  }
  /* helping() {
    if (this.plant.peopleNeeded > 0) {
      this.plant.peopleNeeded--;
      this.saving.iHelpUp();
    }
  }*/

  /* stopHelping() {
     this.plant.peopleNeeded++;
     this.saving.iHelpDown();
   }*/


  async helping() {
    if (!this.plant.isHelping && this.plant.peopleNeeded > 0) {
      this.plant.peopleNeeded--;
      this.plant.isHelping = true;
      await this.exploreService.savePlants();
      this.saving.iHelpUp();
    }
  }

  async stopHelping() {
    if (this.plant.isHelping) {
      this.plant.peopleNeeded++;
      this.plant.isHelping = false;
      this.taskService.remove(this.plant.id);

      this.exploreService.mapMarkers = this.exploreService.mapMarkers.filter(
        marker => marker.lat !== this.plant.latitude || marker.lng !== this.plant.longitude
      );

      await this.exploreService.savePlants();
      this.saving.iHelpDown();
    }
  }

  addFavorite() {
    this.exploreService.addFavorite(this.plant);
  }

}


