import { Injectable, inject } from '@angular/core';
import { ExploreService } from './explore';
import { SavingProfile } from './savingProfile';


@Injectable({
    providedIn: 'root',
})
export class TaskCalendarService {
    saving = inject(SavingProfile);

    private exploreService = inject(ExploreService);



    task: any = [];
    taskChanged = false;

    constructor() {
        if (localStorage.getItem('task')) {
            this.task = JSON.parse('' + localStorage.getItem('task'));
        }
    }

    persist() {
        localStorage.setItem('task', JSON.stringify(this.task));
    }


    add(date: string, description: string, name: string, text: string, id: number,) {

        this.task.push({
            date: date,
            description: description,
            name: name,
            text: text,
            id: id,

            done: false
        });
        this.task.sort((a: any, b: any) =>
            new Date(a.date).getTime() - new Date(b.date).getTime()
        );

        this.persist();
    }

    async delete(task: any) {

        const plant = [
            ...this.exploreService.plantsSuggested,
            ...this.exploreService.plantsNearby,
            ...this.exploreService.plantsNew
        ].find(p => p.id === task.id);

        if (plant) {

            if (plant.isHelping) {
                plant.peopleNeeded++;
                plant.isHelping = false;

                await this.exploreService.savePlants();


                this.saving.iHelpDown();
            }

        }

        this.task = this.task.filter((t: any) => t.id !== task.id);
        this.taskChanged = true;

        this.persist();

    }
}