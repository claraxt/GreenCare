import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, deleteDoc, doc, updateDoc} from '@angular/fire/firestore';
import { Preferences } from '@capacitor/preferences';
import { SavingProfile } from './savingProfile';

@Injectable({
  providedIn: 'root',
})
export class CommunityService {

  private firestore = inject(Firestore);
  private saving = inject(SavingProfile);

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

  constructor() {

    // Fragen live aus Firestore laden
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


  getCurrentUserName(): string {
    return this.saving.greenCare().name || 'Name';
  }

  getCurrentUserId(): string {
    return this.saving.greenCare().userId;
  }

  isOwnPost(post: any): boolean {
    if (!post) {
      return false;
    }

    if (post.userId) {
      return post.userId === this.getCurrentUserId();
    }
    return post.user === this.getCurrentUserName();
  }


  async addQuestion(question: any) {

    const questionWithUser = {
      ...question,
      user: this.getCurrentUserName(),
      userId: this.getCurrentUserId()
    };

    await addDoc(
      this.questionsCollection,
      questionWithUser
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

    if (!this.isOwnPost(question)) {
      console.log('Diese Frage gehört nicht dem aktuellen Benutzer.');
      return;
    }

    await deleteDoc(
      doc(
        this.firestore,
        'questions',
        question.firebaseId
      )
    );

    this.saving.postsDown();
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


  async addTip(tip: any) {

    const tipWithUser = {
      ...tip,
      user: this.getCurrentUserName(),
      userId: this.getCurrentUserId()
    };

    await addDoc(
      this.tipsCollection,
      tipWithUser
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

    // Nur eigenen Tipp löschen
    if (!this.isOwnPost(tip)) {
      console.log('Dieser Tipp gehört nicht dem aktuellen Benutzer.');
      return;
    }

    await deleteDoc(
      doc(
        this.firestore,
        'tips',
        tip.firebaseId
      )
    );

    this.saving.postsDown();
  }

  async loadData() {
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

  saveLikes() {
    this.saveData();
  }
}