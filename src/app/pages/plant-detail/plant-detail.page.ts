import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonContent, IonHeader, IonButton, IonTitle, IonToolbar, IonButtons, IonBackButton, IonModal, IonDatetime, IonCard, IonCardContent, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { ExploreService } from '../../services/explore';
import { SavingProfile } from 'src/app/services/savingProfile';
import { TaskCalendarService } from 'src/app/services/taskCalendar';

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

  async confirm() {
    if (this.chosenDate === '') {
      return;
    }
    // Kalender-Eintrag IMMER anlegen
    this.taskService.add(
      this.chosenDate,
      this.plant.description,
      this.plant.name,
      this.plant.text,
      this.plant.id
    );

    // peopleNeeded danach ändern
    await this.helping();

    this.showOnMap();
  }

  async helping() {
    if (!this.plant.isHelping && this.plant.peopleNeeded > 0) {
      await this.exploreService.changePeopleNeeded(this.plant, -1);
      this.plant.peopleNeeded--;
      this.plant.isHelping = true;
      this.saving.iHelpUp();
    }
  }

  async stopHelping() {
    const task = this.taskService.task.find(
      (t: any) => t.id === this.plant.id
    );
    if (task) {
      await this.taskService.delete(task);
    }
  }

  addFavorite() {
    this.exploreService.addFavorite(this.plant);
  }
}