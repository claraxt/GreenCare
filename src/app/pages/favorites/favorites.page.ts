import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { ExploreService } from 'src/app/services/explore';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, CommonModule, FormsModule]
})
export class FavoritesPage implements OnInit {

  constructor(public exploreService: ExploreService) { }

  ngOnInit() {
  }

}
