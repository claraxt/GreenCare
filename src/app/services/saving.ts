import { Injectable, effect, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class Saving {

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
    },
    )

    persist() {
        localStorage.setItem('greenCare', JSON.stringify(this.greenCare()));
    }

    async updateProfile(name: string = '', description: string = '', date: string, image: string = '') {
        console.log('Image:', image);
        this.greenCare.set({
            name: name,
            description: description,
            date, // new Date().toISOString(),
            image: image,
        });
        this.persist();
        console.log(this.greenCare());
    }
}