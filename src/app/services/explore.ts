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
      flowers: 'Rosen, Lavendel, Ringelblumen, Wildblumen',
      text: 'Dieses Beet befindet sich am Hauptweg des Parks und benötigt regelmäßige Pflege.',
      difficulty: 'Einfach',

      latitude: 52.304399, 
      longitude: 8.051612, 
    },


    {
      id:2,
      name: 'Friedhof Nord',
      description: 'Rosenbeet',
      distance: '1,2 km',
      peopleNeeded: 4,
      task: 'Unkraut entfernen, Gießen, schneiden',
      image: 'assets/Fotos/friedhof.jpeg',

      watering: 'mehrmals pro Woche',
      sunlight: 'Sonne bis Halbschatten',
      flowers: 'Rosen',
      text: 'Dieses Beet befindet sich am Grab der Familie Müller. Der Pfleger des Grabes kann aufgrund zumehmenden Alters keine Pflege mehr gewährleisten. Die Rosen benötigen an heißen Tagen täglich Wasser. Unkraut sollte regelmäßig entfernt werden, und die Rosen sollten nach zunehmendem Wachstum geschnitten werden.',
      difficulty: 'mittel bis schwer',

      latitude: 52.314970,
      longitude: 8.055299,
    },

     {
      id:3,
      name: 'Stadtpark',
      description: 'Parkbeete',
      distance: '1,9 km',
      peopleNeeded: 6,
      task: 'Unkraut entfernen, Gießen',
      image: 'assets/Fotos/stadtpark.jpeg', 

      watering: '3x pro Woche',
      sunlight: 'Sonne',
      flowers: 'Löwenmäulchen, Prachtkerzen, Silberblatt, Männertreu, Schmuckkörbchen',
      text: 'Die zahlreichen Beete im Stadtpark sind für die Öffentlichkeit zugänglich und benötigen regelmäßige Pflege. Die Beete sind mit verschiedenen Blumenarten bepflanzt, darunter Löwenmäulchen, Prachtkerzen, Silberblatt, Männertreu und Schmuckkörbchen. Es ist wichtig, das Unkraut regelmäßig zu entfernen und die Pflanzen ausreichend zu gießen, um Parkbesuchern eine schöne Umgebung zu bieten.',
      difficulty: 'mittel',

      latitude: 52.28666,
      longitude: 8.047542, 
    },

    {
      id:4,
      name: 'Freibad',
      description: 'Blumen an der Rasenfläche',
      distance: '2,0 m',
      peopleNeeded: 2,
      task: 'Unkrauft entfernen',
      image: 'assets/Fotos/freibad.jpeg',

      watering: '1x pro Woche',
      sunlight: 'Sonne bis Halbschatten',
      flowers: 'Zinnien, Studentenblumen, großes Löwenmäulchen',
      text: 'Dieses Blumenbeet befindet sich neben Schwimmbecken auf der Rasenfläche. Wichtig ist, regelmäßiges Unkraut entfernen, um Besuchern weiteren eine schöne Umgebung zu bieten.',
      difficulty: 'Einfach',

      latitude: 52.303293,
      longitude: 8.052641,
    },

  ];

  plantsNearby = [

    {
      id:5,
      name: 'Marktplatz',
      description: 'Blumenkübel',
      distance: '200 m',
      peopleNeeded: 2,
      task: 'Bewässern, Düngen',
      image: 'assets/Fotos/marktplatz.jpeg',
      
      watering: 'täglich',
      sunlight: 'Vollsonnig',
      flowers: 'Eibisch-Baum, Petunien, Süßkartoffel-Ackerwinden',
      text: 'Diese Kübel schmücken den Marktplatz und benötigen intensive Pflege. Wöchentliches Düngen und tägliches Gießen ist wichtig, damit die Blumen den gesamten Sommer blühen. ',
      difficulty: 'mittel',

      latitude: 52.277709,
      longitude: 8.041655,
    },

    {
      id:6,
      name: 'Schulhof',
      description: 'Wildblumenbeet',
      distance: '450 m',
      peopleNeeded: 1,
      task: 'Unkrauft entfernen',
      image: 'assets/Fotos/schulhof.jpeg',

      watering: '2-3x pro Woche',
      sunlight: 'Sonnig',
      flowers: 'Wildblumen',
      text: 'Die Wildblumen auf dem Schuhof sind sehr pflegeleicht und bieten Insekten und Bienen einen Lebensraum. Wichtig ist, dass das Unkraut regelmäßig entfernt wird, damit die Wildblumen ungestört wachsen können. Da die Wildblumen schon gut angewachsen sind, benötigen sie kein zusätzliches Bewässern oder Düngen.',
      difficulty: 'Einfach',

      latitude: 52.293255,
      longitude: 8.058585,
    },

    {
      id:7,
      name: 'Krankenhaus',
      description: 'Blumenbeet am Eingang',
      distance: '500 m',
      peopleNeeded: 1,
      task: 'Gießen',
      image: 'assets/Fotos/krankenhaus.jpeg',

      watering: 'höchstens 1x pro Woche',
      sunlight: 'Vollsonnig',
      flowers: 'Bodendeckerrosen, Weiße Beetrosen, Lavendel',
      text: 'Dieses Beet befindet sich am Eingang des Krankenhauses und benötigt regelmäßige Pflege. Die Bodendeckerrosen, weißen Beetrosen und Lavendel benötigen an heißen Tagen zusätzliches Wasser. Das Beet ist für Besucher und Patienten des Krankenhauses sichtbar, daher ist es wichtig, dass es gepflegt aussieht.',
      difficulty: 'Einfach',

      latitude: 52.288366,
      longitude: 8.052233,
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
      image: 'assets/Fotos/bahnhof.jpeg', 

      watering: 'bei extremer Hitze',
      sunlight: 'Vollonne und Wärme',
      flowers: 'Rote Spornblumen',
      text: 'Die Rote Spornblume schmückt den Bahnhof und ist eine äußerst robuste ud unkomplizierte Staude. Gießen ist nur in der Anwachsphase oder bei extrem langanhaltenden Hitzepärioden nötig',
      difficulty: 'Einfach',

      latitude: 52.281652,
      longitude: 8.043603,
    },

    {
      id:9,
      name: 'Kirchplatz',
      description: 'mehrere Beete an dem Platz',
      distance: '2,1 km',
      peopleNeeded: 4,
      task: 'Pflege der Beete',
      image: 'assets/Fotos/kirchplatz.jpeg', 

      watering: 'regelmäßig bis wenig Bewässern, Staunässe vermeiden',
      sunlight: 'Vollsonnig',
      flowers: 'Gelber Sonnenhut, Steppen-Salbei, Dunkellaubige Zier-Süßkartoffel, Prachtkerzen, Blattschmuckplanzen',
      text: 'Die Beete auf dem Kirchplatz sind für die Öffentlichkeit zugänglich und benötigen regelmäßige Pflege. Die Beete sind mit verschiedenen Blumenarten bepflanzt, darunter Gelber Sonnenhut, Steppen-Salbei, Dunkellaubige Zier-Süßkartoffel, Prachtkerzen und Blattschmuckplanzen. Es ist wichtig, das Unkraut regelmäßig zu entfernen und die Pflanzen ausreichend zu gießen, um Besuchern eine schöne Umgebung zu bieten. Der Steppen-Salbei benötigt nach der ersten Hauptblüte im Sommer einen Rückschnitt, um eine zweite Blüte im Spätsommer zu fördern. Die vertrockneten Samenstände des Gelben Sonnenhuts sollten im Winter als Vogelfutter stehen gelassen werden, Verblühte Stängel können in der Blühtezeit zum Blattansatz zurückgeschnitten werden, um neue Knospenbildung anzuregen.',
      difficulty: 'mittel bis schwierig',

      latitude: 52.277832,
      longitude: 8.041496,
    },

  ];

  
}
