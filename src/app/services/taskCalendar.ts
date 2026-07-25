import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TaskCalendarService {

    task: any = [];

    constructor() {
        if (localStorage.getItem('task')) {
            this.task = JSON.parse('' + localStorage.getItem('task'));
        }
    }

    persist() {
        localStorage.setItem('task', JSON.stringify(this.task));
    }


    add(date: string, description: string) {

        this.task.push({
            date: date,
            description: description,
            done: false
        });

        this.persist();
    }

    delete(task: any) {
        this.task.splice(this.task.indexOf(task), 1);
        this.persist();
    }



    setDone(task: any) {
        task.done = true;
        this.persist();
    }

    setUndone(task: any) {
        task.done = false;
        this.persist();
    }

    clearAll() {
        this.task = [];
        this.persist();
    }
}
