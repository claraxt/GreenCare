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
    },
    )

    persist() {
        localStorage.setItem('greenCare', JSON.stringify(this.greenCare()));
    }

    updateProfile(name: string, description: string, date: string) {
        this.greenCare.set({
            name,
            description,
            date: new Date().toISOString(),
        });
    }
}