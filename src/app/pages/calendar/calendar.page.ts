import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonDatetime, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { TaskCalendarService } from 'src/app/services/taskCalendar';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonDatetime, IonCardHeader, IonCardTitle]
})
export class CalendarPage implements OnInit {
  taskService = inject(TaskCalendarService)
  date = new Date().toISOString();
  description = '';

  constructor() {

  }

  ngOnInit() {

  }
  add() {
    this.taskService.add(this.date, this.description);
  }



}
