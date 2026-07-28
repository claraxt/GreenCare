import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonDatetime, IonCardHeader, IonCardTitle, IonList, IonItem, IonItemOption, IonItemSliding, IonLabel, IonItemOptions, IonButton, IonRow, IonIcon } from '@ionic/angular/standalone';
import { TaskCalendarService } from 'src/app/services/taskCalendar';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
  standalone: true,
  imports: [IonRow, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonCard, IonCardContent, IonDatetime, IonCardHeader, IonCardTitle, IonList, IonItem, IonItemOption, IonItemSliding, IonLabel, IonItemOptions, IonIcon]
})
export class CalendarPage implements OnInit {
  taskService = inject(TaskCalendarService);
  private alertController = inject(AlertController);


  date = new Date().toISOString();
  description = '';
  name = '';
  text = '';

  constructor() {

  }

  showDates: any[] = [];

  ngOnInit() {
    console.log(this.taskService.task);
    this.updateShowDates();
  }

  updateShowDates() {
    this.showDates = this.taskService.task.map((task: any) => ({
      date: task.date.substring(0, 10),
      textColor: '#C8D4B0',
      backgroundColor: '#5F7F5A'
    }))
  }

  async delete(task: any) {
    const alert = await this.alertController.create({
      header: 'Einsatz löschen?',
      message: 'Möchtest Du den Einsatz wirklich löschen?',
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
            this.taskService.delete(task);
            this.updateShowDates();
          },
        },
      ],
    });

    await alert.present();
  }

}
