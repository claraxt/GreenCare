import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonTextarea, IonButton, IonButtons, IonBackButton, IonItem } from '@ionic/angular/standalone';
@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.page.html',
  styleUrls: ['./new-question.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonTextarea, IonButton, IonButtons, IonBackButton, IonItem, CommonModule, FormsModule]
})
export class NewQuestionPage implements OnInit {
  selectedImage ="";
  title ="";
  description="";

@ViewChild('fileInput')
fileInput!: ElementRef;
  constructor() { }

  ngOnInit() {}

  selectImage() {  this.fileInput.nativeElement.click();
  }

  imageSelected(event: any) {const file = event.target.files[0];

  console.log(file);}
    
}
