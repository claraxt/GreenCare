import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonTextarea, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { CommunityService } from 'src/app/services/community';
@Component({
  selector: 'app-tip-detail',
  templateUrl: './tip-detail.page.html',
  styleUrls: ['./tip-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton,IonItem, IonTextarea, IonCard, IonCardContent, CommonModule, FormsModule]
})
export class TipDetailPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public communityService: CommunityService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tip = this.communityService.getTip(id);
  }

  tip: any;

  newAnswer="";
  sendAnswer(){
    this.tip.answers.push(
      {
        user:"Du",
        text:this.newAnswer
      }
    );
    this.newAnswer="";
  }

}
