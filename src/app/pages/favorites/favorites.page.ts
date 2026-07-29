import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonButtons, IonBackButton, AlertController, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ExploreService } from 'src/app/services/explore';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, CommonModule, FormsModule, IonButtons, IonBackButton, IonButton, IonIcon]
})
export class FavoritesPage implements OnInit {
  public exploreService = inject(ExploreService);
  private alertController = inject(AlertController);

  constructor() { }

  ngOnInit() {
  }
  async delete(plant: any) {
    const alert = await this.alertController.create({
      header: 'Einsatz löschen?',
      message: 'Möchtest Du den Standort wirklich löschen?',
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
            this.exploreService.delete(plant);

          },
        },
      ],
    });

    await alert.present();
  }
}
