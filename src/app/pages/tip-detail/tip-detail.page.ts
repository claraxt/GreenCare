import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonTextarea, IonCard, IonIcon, IonCardContent, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { CommunityService } from 'src/app/services/community';

@Component({
  selector: 'app-tip-detail',
  templateUrl: './tip-detail.page.html',
  styleUrls: ['./tip-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonTextarea, IonCard, IonIcon, IonCardContent, IonButtons, IonBackButton, CommonModule, FormsModule]
})

export class TipDetailPage implements OnInit {
  public communityService = inject(CommunityService);
  private route = inject(ActivatedRoute);

  tip: any;

  async ngOnInit() {
    await this.communityService.loadData();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tip = this.communityService.getTip(id);
  }

   likeTip() {
    if (!this.tip.liked) {
      this.tip.likes++;
      this.tip.liked = true;
    } else {
      this.tip.likes--;
      this.tip.liked = false;
    }
      this.communityService.saveData();
  }
}
