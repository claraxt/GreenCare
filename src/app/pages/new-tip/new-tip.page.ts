import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonTextarea, IonButton, IonButtons, IonBackButton, IonItem } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CommunityService } from 'src/app/services/community';
@Component({
  selector: 'app-new-tip',
  templateUrl: './new-tip.page.html',
  styleUrls: ['./new-tip.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonTextarea, IonButton, IonButtons, IonBackButton, IonItem, CommonModule, FormsModule]
})
export class NewTipPage implements OnInit {
  selectedImage ="";
  title ="";
  description="";

@ViewChild('fileInput')
fileInput!: ElementRef;
  constructor(
     private router: Router,

  public communityService: CommunityService

  ) { }

  ngOnInit() {}

  selectImage() {  this.fileInput.nativeElement.click();
  }

  imageSelected(event: any) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.selectedImage = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  publishTip() {
    const newTip = {
      id: Date.now(),
      user: "Du",
      image: this.selectedImage,
      title: this.title,
      description: this.description,
      answers: 0
    };
    this.communityService.addTip(newTip);
    this.router.navigate(['/tabs/community']);
  }
}

