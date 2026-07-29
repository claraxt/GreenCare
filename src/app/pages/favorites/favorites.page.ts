import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { ExploreService } from 'src/app/services/explore';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, CommonModule, FormsModule, IonButtons, IonBackButton]
})
export class FavoritesPage implements OnInit {
  public exploreService = inject(ExploreService);

  constructor() { }

  ngOnInit() {
  }

}
