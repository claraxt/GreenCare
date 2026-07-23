import { Injectable } from '@angular/core';

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
        answers:4
      },

      {
        id:2,
        user:"Tim",
        image:"assets/Fotos/krankerlavendel.jpeg",
        title:"Was fehlt meinem Lavendel?",
        answers:2
      },
    ];

    tips = [
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
      },
    ];
}
