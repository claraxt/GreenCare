import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonTextarea, IonCard , IonIcon, IonCardContent } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { CommunityService } from 'src/app/services/community';
import { addIcons } from 'ionicons';
import { heartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tip-detail',
  templateUrl: './tip-detail.page.html',
  styleUrls: ['./tip-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton,IonItem, IonTextarea, IonCard, IonIcon, IonCardContent, CommonModule, FormsModule]
})
export class TipDetailPage implements OnInit {
  tip: any;
  constructor(
    private route: ActivatedRoute,
    public communityService: CommunityService
  ) { 

  addIcons({
    heartOutline
  }); 
}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tip = this.communityService.getTip(id);
  }

  likeTip(){
    this.tip.likes++;
  }


}
