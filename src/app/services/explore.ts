import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExploreService {
  constructor() {}
  plantsSuggested = [

    {
      id:1,
      name: 'Park am See',
      description: 'Blumenbeet am Weg',
      distance: '800 m',
      peopleNeeded: 2,
      task: 'Gießen',
      image: 'assets/Fotos/park.jpeg', 
      
      watering: '2-3x pro Woche',
      sunlight: 'Sonne bis Halbschatten',
      plants: 'Rosen, Lavendel, Ringelblumen, Wildblumen',
      text: 'Dieses Beet befindet sich am Hauptweg des Parks und benötigt regelmäßige Pflege.',
      difficulty: 'Einfach'
    },


    {
      id:2,
      name: 'Friedhof Nord',
      description: 'Rosenbeet',
      distance: '1,2 km',
      peopleNeeded: 3,
      task: 'Unkraut entfernen, Gießen, schneiden',
      image: 'assets/Fotos/friedhof.jpeg'
    },

     {
      id:3,
      name: 'Stadtpark',
      description: 'Parkbeete',
      distance: '1,9 km',
      peopleNeeded: 6,
      task: 'Unkraut entfernen, Gießen',
      image: 'assets/Fotos/stadtpark.jpeg'
    },

    {
      id:4,
      name: 'Freibad',
      description: 'Blumen an der Rasenfläche',
      distance: '2,0 m',
      peopleNeeded: 2,
      task: 'Unkrauft entfernen',
      image: 'assets/Fotos/freibad.jpeg'
    },

  ];

  plantsNearby = [

    {
      id:5,
      name: 'Marktplatz',
      description: 'Blumenkübel',
      distance: '200 m',
      peopleNeeded: 1,
      task: 'Bewässern',
      image: 'assets/Fotos/marktplatz.jpeg' 
    },

    {
      id:6,
      name: 'Schulhof',
      description: 'Wildblumenbeet',
      distance: '450 m',
      peopleNeeded: 2,
      task: 'Gießen, Unkrauft entfernen',
      image: 'assets/Fotos/schulhof.jpeg'
    },

    {
      id:7,
      name: 'Krankenhaus',
      description: 'Blumenbeet am Eingang',
      distance: '500 m',
      peopleNeeded: 1,
      task: 'Gießen',
      image: 'assets/Fotos/krankenhaus.jpeg'
    },

  ];

  plantsNew = [

    {
      id:8,
      name: 'Bahnhof',
      description: 'Blumen am Eingang',
      distance: '1,9 km',
      peopleNeeded: 1,
      task: 'gießen',
      image: 'assets/Fotos/bahnhof.jpeg'
    },

    {
      id:9,
      name: 'Kirchplatz',
      description: 'mehrere Beete an dem Platz',
      distance: '2,1 km',
      peopleNeeded: 4,
      task: 'Pflege der Beete',
      image: 'assets/Fotos/kirchplatz.jpeg'
    },

  ];

  
}
