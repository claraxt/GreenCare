import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCard, IonCardContent, IonRow, IonCol } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-lexicon-detail',
  templateUrl: './lexicon-detail.page.html',
  styleUrls: ['./lexicon-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, CommonModule, FormsModule, IonCard, IonCardContent, IonRow, IonCol]
})

export class LexiconDetailPage implements OnInit {
  plant: any;
  private route = inject(ActivatedRoute);
  private plantService = inject(PlantService);

  async ngOnInit() {
    // Pflanzen aufrufen
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const plants = await this.plantService.getAllPlants();

    this.plant = plants.find(
      (p: any) => p.id === id
    );

    //wenn keine Pflanze dann beenden
    if (!this.plant) {
      return;
    }
  }
}