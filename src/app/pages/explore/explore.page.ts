import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonSegment, IonSegmentButton, IonCard, IonCardContent, IonIcon  } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { person } from 'ionicons/icons';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonSegment, IonSegmentButton, IonCard, IonCardContent,IonIcon, CommonModule, FormsModule]
})
export class ExplorePage implements OnInit {

  constructor() { 
     addIcons({
    person
  });
  }

  ngOnInit() {
  }

   selectedSegment = 'vorgeschlagen';

  plants = [

    {
      name: 'Park am See',
      description: 'Blumenbeete und Wiese am See',
      distance: '0,8 km',
      peopleNeeded: 5,
      task: 'Gießen und Rasen mähen'
    },

    {
      name: 'Friedhof',
      description: 'Grab der Familie Müller',
      distance: '1,2 km',
      peopleNeeded: 2,
      task: 'Gießen und Unkraut jäten'
    },

    {
      name: 'Stadtplatz',
      description: 'Blumenbeet am Weg',
      distance: '2,3 km',
      peopleNeeded: 3,
      task: 'Gießen'
    }

  ];
}
