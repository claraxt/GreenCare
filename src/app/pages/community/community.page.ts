import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonCard, IonCardContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { CommunityService } from 'src/app/services/community';
import { addIcons } from 'ionicons';
import { personOutline, chatbubbleOutline, heartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonCard, IonCardContent, IonButton, IonIcon, CommonModule, FormsModule]
})

export class CommunityPage implements OnInit {
   
  selectedSegment = 'fragen'; 
   posts: any [] = []; 

    constructor(
      public communityService: CommunityService
    ) {
       addIcons ({
       personOutline, chatbubbleOutline, heartOutline
       });
     }

  ngOnInit() {

    this.posts = this.communityService.questions;

  }
  segmentChanged(event: any) {
  if(this.selectedSegment === "fragen"){
    this.posts = this.communityService.questions; 
  }
  if(this.selectedSegment === "tipps"){
    this.posts = this.communityService.tips; 
  }
  if(this.selectedSegment === "lexikon"){
    this.posts = [];
  }
}


newPost () {
  console.log("Neue Frage"); 
}
}
