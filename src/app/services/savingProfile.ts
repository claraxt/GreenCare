import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SavingProfile {

  constructor() {
    const saved = localStorage.getItem('greenCare');

    if (saved) {
      const profile = JSON.parse(saved);

      // Falls ein altes Profil noch keine userId hat
      if (!profile.userId) {
        profile.userId = crypto.randomUUID();
      }

      this.greenCare.set(profile);
    }

    // Falls noch gar kein Profil existiert
    if (!this.greenCare().userId) {
      this.greenCare.update(profile => ({
        ...profile,
        userId: crypto.randomUUID()
      }));
    }

    effect(() => {
      this.persist();
    });
  }

  greenCare = signal({
    userId: '',
    name: 'Name',
    description: 'Beschreibung',
    date: new Date().toISOString(),
    image: '',
    iHelp: 0,
    posts: 0,
    location: 0,
  });

  persist() {
    localStorage.setItem(
      'greenCare',
      JSON.stringify(this.greenCare())
    );
  }

  async updateProfile(
    name: string = '',
    description: string = '',
    date: string,
    image: string = '',
    iHelp: number,
    posts: number,
    location: number,
  ) {
    this.greenCare.update(profile => ({
      ...profile,
      name: name,
      description: description,
      date,
      image: image,
      iHelp: iHelp,
      posts: posts,
      location: location,
    }));

    this.persist();
  }

  iHelpUp() {
    this.greenCare.update(profile => ({
      ...profile,
      iHelp: profile.iHelp + 1
    }));
  }

  iHelpDown() {
    this.greenCare.update(profile => ({
      ...profile,
      iHelp: Math.max(0, profile.iHelp - 1)
    }));
  }

  postsUp() {
    this.greenCare.update(profile => ({
      ...profile,
      posts: profile.posts + 1
    }));
  }

  postsDown() {
    this.greenCare.update(profile => ({
      ...profile,
      posts: Math.max(0, profile.posts - 1)
    }));
  }

  locationUp() {
    this.greenCare.update(profile => ({
      ...profile,
      location: profile.location + 1
    }));
  }

  locationDown() {
    this.greenCare.update(profile => ({
      ...profile,
      location: Math.max(0, profile.location - 1)
    }));
  }
}