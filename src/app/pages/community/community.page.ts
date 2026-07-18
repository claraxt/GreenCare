import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';


@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent]
})
export class CommunityPage implements OnInit {

  plants: Plant[] = [];

  constructor(private plantService: PlantService) {

  }

  async ngOnInit() {

    console.log("Community geladen");

    const result = await this.plantService.plantInfo();

    console.log("API Ergebnis:", result);

    this.plants = result;

  }

  /*plants: Plant[] = [];

  constructor(private trefle: TrefleService) { }

  search(value: string) {

    this.trefle.searchPlants(value).subscribe(result => {
      this.plants = result.data;
    });

  }*/

}
