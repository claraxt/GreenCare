import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CommunityService {

  constructor (){}

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
    }
    
    getQuestion(id:number){
      return this.questions.find(
        question=>question.id===id);
    }

    deleteQuestion(id:number){
      this.questions=this.questions.filter(
        question=>question.id!==id
      );
    }

     addTip(tip: any) {
      this.tips.unshift(tip);
    }
    getTip(id:number){
      return this.tips.find(
        tip=>tip.id===id);
    }

    deleteTip(id:number){
      this.tips=this.tips.filter(
       tip=>tip.id!==id
      );
    }



}
