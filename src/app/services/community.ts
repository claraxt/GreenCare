import { Injectable, inject } from '@angular/core';
import {
  Firestore, collection, collectionData, addDoc, deleteDoc, doc, updateDoc, getDocs, query
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})

export class CommunityService {
  private loaded = false;

  //constructor() {}
  private firestore = inject(Firestore);

  private questionsCollection = collection(
    this.firestore,
    'questions'
  );

  private tipsCollection = collection(
    this.firestore,
    'tips'
  );

  questions: any[] = [];
  tips: any[] = [];

  //private loaded = false;

  constructor() {

    // Frage aus Firestore laden
    collectionData(this.questionsCollection, {
      idField: 'firebaseId'
    }).subscribe(data => {
      this.questions.length = 0;
      this.questions.push(...data);
    });

    // Tipps live aus Firestore laden
    collectionData(this.tipsCollection, {
      idField: 'firebaseId'
    }).subscribe(data => {
      this.tips.length = 0;
      this.tips.push(...data);
    });
  }

  /*startQuestions = [
    {
      id: 1,
      user: "Lisa",
      image: "assets/Fotos/rosenwerdengelb.jpeg",
      title: "Warum werden meine Rosen gelb?",
      answers: [
        {
          user: "Anna",
          text: "Vielleicht zu wenig Wasser."
        },
        {
          user: "Max",
          text: "Bei mir lag es am Boden."
        }
      ]
    },

    {
      id: 2,
      user: "Tim",
      image: "assets/Fotos/krankerlavendel.jpeg",
      title: "Was fehlt meinem Lavendel?",
      answers: [
        {
          user: "Jana",
          text: "Vielleicht zu wenig Licht?"
        },
        {
          user: "David",
          text: "Vielleicht ist es auch zu viel Sonneneinstrahlung."
        }
      ]
    },
  ];

  startTips = [
    {
      id: 1,
      user: "Anna",
      image: "assets/Fotos/lavendel.jpeg",
      title: "Lavendel lieber selten, aber gründlich gießen.",
      likes: 16
    },

    {
      id: 2,
      user: "Max",
      image: "assets/Fotos/unkraut.jpeg",
      title: "Unkraut am besten nach Regen entfernen.",
      likes: 11
    },
  ];*/

  //question zeugs
  async addQuestion(question: any) {

    await addDoc(
      this.questionsCollection,
      question
    );
  }


  getQuestion(id: number) {

    return this.questions.find(
      question => question.id === id
    );
  }


  async deleteQuestion(id: number) {

    const question = this.questions.find(
      question => question.id === id
    );

    if (!question?.firebaseId) {
      return;
    }

    await deleteDoc(
      doc(
        this.firestore,
        'questions',
        question.firebaseId
      )
    );
  }

  async updateQuestion(id: number, data: any) {

    const question = this.questions.find(
      question => question.id === id
    );

    if (!question?.firebaseId) {
      return;
    }

    await updateDoc(
      doc(
        this.firestore,
        'questions',
        question.firebaseId
      ),
      data
    );
  }


  //tipp zeugs

  async addTip(tip: any) {

    await addDoc(
      this.tipsCollection,
      tip
    );
  }


  getTip(id: number) {

    return this.tips.find(
      tip => tip.id === id
    );
  }


  async deleteTip(id: number) {

    const tip = this.tips.find(
      tip => tip.id === id
    );

    if (!tip?.firebaseId) {
      return;
    }

    await deleteDoc(
      doc(
        this.firestore,
        'tips',
        tip.firebaseId
      )
    );
  }


  async loadData() {
    this.loaded = true;
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

  /*async loadData() {
    if (this.loaded) {
      return;
    }
    const questions = await Preferences.get({
      key: 'questions'
    });
    if (questions.value) {
      this.questions = JSON.parse(questions.value);
    }
    const tips = await Preferences.get({
      key: 'tips'
    });
    if (tips.value) {
      this.tips = JSON.parse(tips.value);
    }
    this.loaded = true;
  }*/

  saveLikes() {
    this.saveData();
  }
}
/*addQuestion(question: any) {

  this.questions.unshift(question);
  this.saveData();
}

getQuestion(id: number) {
  return this.questions.find(
    question => question.id === id
  );
}

deleteQuestion(id: number) {
  this.questions = this.questions.filter(
    question => question.id !== id
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

deleteTip(id: number) {
  this.tips = this.tips.filter(
    tip => tip.id !== id
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

async loadData() {
  if (this.loaded) {
    return;
  }
  const questions = await Preferences.get({
    key: 'questions'
  });
  if (questions.value) {
    this.questions = JSON.parse(questions.value);
  }
  const tips = await Preferences.get({
    key: 'tips'
  });
  if (tips.value) {
    this.tips = JSON.parse(tips.value);
  }
  this.loaded = true;
}

saveLikes() {
  this.saveData();
}
}*/
