import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonCard,
  IonCardContent,
  IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { person } from 'ionicons/icons';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonSegment,
    IonSegmentButton,
    IonCard,
    IonCardContent,
    IonIcon,
    CommonModule,
    FormsModule
  ]
})

export class ExplorePage implements OnInit {

  constructor() {
    addIcons({
      person
    });
  }

  selectedSegment = 'vorgeschlagen';

  plants: any[] = [];

  plantsSuggested = [

    {
      name: 'Park am See',
      description: 'Blumenbeet am Weg',
      distance: '800 m',
      peopleNeeded: 2,
      task: 'Gießen',
      image: 'assets/Fotos/park.jpeg'    
    },


    {
      name: 'Friedhof Nord',
      description: 'Rosenbeet',
      distance: '1,2 km',
      peopleNeeded: 3,
      task: 'Unkraut entfernen, Gießen, schneiden',
      image: 'assets/Fotos/friedhof.jpeg'
    },

     {
      name: 'Stadtpark',
      description: 'Parkbeete',
      distance: '1,9 km',
      peopleNeeded: 6,
      task: 'Unkraut entfernen, Gießen',
      image: 'assets/Fotos/stadtpark.jpeg'
    },

    {
      name: 'Freibad',
      description: 'Blumen an der Rasenfläche',
      distance: '2,0 m',
      peopleNeeded: 2,
      task: 'Unkrauft entfernen',
      image: 'assets/Fotos/freibad.jpeg'
    },

  ];

  plantsNearby = [

    {
      name: 'Marktplatz',
      description: 'Blumenkübel',
      distance: '200 m',
      peopleNeeded: 1,
      task: 'Bewässern',
      image: 'assets/Fotos/marktplatz.jpeg' 
    },

    {
      name: 'Schulhof',
      description: 'Wildblumenbeet',
      distance: '450 m',
      peopleNeeded: 2,
      task: 'Gießen, Unkrauft entfernen',
      image: 'assets/Fotos/schulhof.jpeg'
    },

    {
      name: 'Krankenhaus',
      description: 'Blumenbeet am Eingang',
      distance: '500 m',
      peopleNeeded: 1,
      task: 'Gießen',
      image: 'assets/Fotos/krankenhaus.jpeg'
    },

  ];

  plantsNew = [

    {
      name: 'Bahnhof',
      description: 'Blumen am Eingang',
      distance: '1,9 km',
      peopleNeeded: 1,
      task: 'gießen',
      image: 'assets/Fotos/bahnhof.jpeg'
    },

    {
      name: 'Kirchplatz',
      description: 'mehrere Beete an dem Platz',
      distance: '2,1 km',
      peopleNeeded: 4,
      task: 'Pflege der Beete',
      image: 'assets/Fotos/kirchplatz.jpeg'
    },

  ];

  ngOnInit() {

    this.plants = this.plantsSuggested;

  }

  segmentChanged(event: any) {

    this.selectedSegment = event.detail.value;

    if (this.selectedSegment === 'vorgeschlagen') {

      this.plants = this.plantsSuggested;

    }

    if (this.selectedSegment === 'naehe') {

      this.plants = this.plantsNearby;

    }

    if (this.selectedSegment === 'neu') {

      this.plants = this.plantsNew;

    }

  }

  openPlant(plant: any) {

    console.log(plant);


  }

}