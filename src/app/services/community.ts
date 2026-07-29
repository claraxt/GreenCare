import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class CommunityService {
  private loaded = false;

  constructor (){ }

   questions = [
      {
        id: 1,
        user:"Lisa",
        image:"assets/Fotos/rosenwerdengelb.jpeg",
        title:"Warum werden meine Rosen gelb?",
        answers:[
          {
            user:"Anna",
            text:"Vielleicht zu wenig Wasser."
          },
          {
            user:"Max",
            text:"Bei mir lag es am Boden."
          }
        ]
      },

      {
        id:2,
        user:"Tim",
        image:"assets/Fotos/krankerlavendel.jpeg",
        title:"Was fehlt meinem Lavendel?",
        answers:[
          {
            user:"Jana",
            text:"Vielleicht zu wenig Licht?"
          },
          {
            user:"David",
            text:"Vielleicht ist es auch zu viel Sonneneinstrahlung."
          }
        ]
      },
    ];

    tips = [
      {
        id:1,
        user:"Anna",
        image:"assets/Fotos/lavendel.jpeg",
        title:"Lavendel lieber selten, aber gründlich gießen.",
        likes:16
      },

      {
        id:2,
        user:"Max",
        image:"assets/Fotos/unkraut.jpeg",
        title:"Unkraut am besten nach Regen entfernen.",
        likes:11
      },
    ];

    addQuestion(question: any) {
      this.questions.unshift(question);
      this.saveData();
    }
    
   getQuestion(id: number) {
  return this.questions.find(
    question => question.id === id
  );
}
    

    deleteQuestion(id:number){
      this.questions=this.questions.filter(
        question=>question.id!==id
      );
      this.saveData();
    }

     addTip(tip: any) {
      this.tips.unshift(tip);
      this.saveData();
    }

    getTip(id: number) {
  return this.tips.find(
    tip => tip.id === id
  );
}

    deleteTip(id:number){
      this.tips=this.tips.filter(
       tip=>tip.id!==id
      );
      this.saveData();
    }

    async saveData() {

      await Preferences.set({
        key: 'questions',
        value: JSON.stringify(this.questions)
      });

      await Preferences.set({
        key: 'tips',
        value: JSON.stringify(this.tips)
      });
    }

    async loadData(){
      if (this.loaded) {
        return;
      }
      const questions = await Preferences.get({
        key: 'questions'
      });
      if (questions.value) {
        this.questions = JSON.parse(questions.value);
      }
      const tips= await Preferences.get({
        key: 'tips'
      }); 
      if(tips.value) {
        this.tips=JSON.parse(tips.value);
      }
      this.loaded=true;
    }

    saveLikes() {
  this.saveData();
}



}
