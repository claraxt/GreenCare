import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonCard, IonCardContent, IonButton } from '@ionic/angular/standalone';


@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonCard, IonCardContent, IonButton, CommonModule, FormsModule]
})
export class CommunityPage implements OnInit {


    selectedSegment = "fragen";
    posts: any[] = [];
    questionPosts = [
      {
        id: 1,
        user:"Lisa",
        image:"assets/Fotos/rosenwerdengelb.jpeg",
        title:"Warum werden meine Rosen gelb?",
        answers:4
      },

      {
        id:2,
        user:"Tim",
        image:"assets/Fotos/krankerlavendel.jpeg",
        title:"Was fehlt meinem Lavendel?",
        answers:2
      }
    ];

    tipPosts = [
      {
        id:1,
        user:"Anna",
        image:"assets/Fotos/friedhof.jpeg",
        title:"Lavendel lieber selten, aber gründlich gießen.",
        likes:16
      },

      {
        id:2,
        user:"Max",
        image:"assets/Fotos/freibad.jpeg",
        title:"Unkraut am besten nach Regen entfernen.",
        likes:11
      }
    ];
  
    constructor() { }

  ngOnInit() {

    this.posts = this.questionPosts;

  }

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
    if (this.selectedSegment === 'fragen') {
      this.posts = this.questionPosts;
    }

    if (this.selectedSegment === 'tipps') {
      this.posts = this.tipPosts;
    }

    if (this.selectedSegment === 'lexikon') {
      this.posts = [];
    }

  }

  newPost() {
    console.log("Neue Frage");
  }

}