import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton
} from '@ionic/angular/standalone';

import { ActivatedRoute } from '@angular/router';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-lexicon-detail',
  templateUrl: './lexicon-detail.page.html',
  styleUrls: ['./lexicon-detail.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    CommonModule,
    FormsModule
  ]
})
export class LexiconDetailPage implements OnInit {

  plant: any;

  constructor(
    private route: ActivatedRoute,
    private plantService: PlantService
  ) {}

  ngOnInit() {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    (this.plantService as any).getPlant(id).subscribe((data: any) => {
      this.plant = data;
      console.log(this.plant);

    });

  }

}