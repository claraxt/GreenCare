/*import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Firebase {
  //siehe mehr in environment.ts

  /* Firestore= inject(fire store); //veribindung firestor
  itemCollection= collection(this.firestore, ‘wt.chat’);
  q = query(this.itemCollection, order by(‘timestamp’,’asc’));
  messages = toSignalCollectionData<any>(this.q,{idField:’id’}),{initial value:[] AS any[]});
   
  aus der vorlesung mitgeschrieben idk wie richtig/vollständig
}*/

/*import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  query,
  orderBy,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {

  private firestore = inject(Firestore);

  private itemCollection = collection(this.firestore, 'wt.chat');

  private q = query(
    this.itemCollection,
    orderBy('timestamp', 'asc')
  );

  messages$ = collectionData(this.q, {
    idField: 'id',
  });
}
*/