import { Component, inject } from '@angular/core';
import { IonDatetime } from '@ionic/angular/standalone';
import { TaskCalendarService } from 'src/app/services/taskCalendar';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonDatetime],
})

export class Calendar {
  ;
}
