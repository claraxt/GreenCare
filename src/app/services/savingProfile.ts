import { Injectable, effect, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SavingProfile {

    constructor() {
        if (localStorage.getItem('greenCare')) {
            this.greenCare.set(JSON.parse('' + localStorage.getItem('greenCare')));
        }
        effect(() => { this.persist() });
    }

    greenCare = signal({

        name: 'Name',
        description: 'Beschreibung',
        date: new Date().toISOString(),
        image: '',
        iHelp: 0,
        posts: 0,
        location: 0,
    },
    )

    persist() {
        localStorage.setItem('greenCare', JSON.stringify(this.greenCare()));
    }

    async updateProfile(name: string = '', description: string = '', date: string, image: string = '', iHelp: number, posts: number, location: number,) {
        console.log('Image:', image);
        this.greenCare.set({
            name: name,
            description: description,
            date,
            image: image,
            iHelp: iHelp,
            posts: posts,
            location: location,
        });
        this.persist();
        console.log(this.greenCare());
    }

    iHelpUp() {
        this.greenCare.update(profile => ({
            ...profile,
            iHelp: profile.iHelp + 1
        }));

        this.persist();
    }

    iHelpDown() {
        this.greenCare.update(profile => ({
            ...profile,
            iHelp: profile.iHelp - 1
        }));

        this.persist();
    }

    postsUp() {
        this.greenCare.update(profile => ({
            ...profile,
            posts: profile.posts + 1
        }));

        this.persist();
    }

    locationUp() {
        this.greenCare.update(profile => ({
            ...profile,
            location: profile.location + 1
        }));

        this.persist();
    }


}