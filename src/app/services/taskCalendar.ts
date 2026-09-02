
import { Injectable, inject } from '@angular/core';
import { ExploreService } from './explore';
import { SavingProfile } from './savingProfile';

@Injectable({
    providedIn: 'root',
})
export class TaskCalendarService {

    saving = inject(SavingProfile);
    private exploreService = inject(ExploreService);

    task: any[] = [];
    taskChanged = false;

    constructor() {
        const savedTasks = localStorage.getItem('task');

        if (savedTasks) {
            this.task = JSON.parse(savedTasks);
        }
    }

    persist() {
        localStorage.setItem('task', JSON.stringify(this.task));
    }

    //checkt ob Pflanze schon als task existiert
    taskCheck(plantId: number): boolean {
        return this.task.some(
            (task: any) => task.id === plantId
        );
    }

    add(
        date: string,
        description: string,
        name: string,
        text: string,
        id: number
    ): boolean {

        // wenn existent nicht adden
        if (this.taskCheck(id)) {
            return false;
        }

        this.task.push({
            date,
            description,
            name,
            text,
            id,
            done: false
        });

        //sortiert nach hinzugefügtem Datum
        this.task.sort(
            (a: any, b: any) =>
                new Date(a.date).getTime() -
                new Date(b.date).getTime()
        );

        this.persist();

        return true;
    }

    async delete(task: any) {

        const plant = [
            ...this.exploreService.plantsSuggested,
            ...this.exploreService.plantsNearby,
            ...this.exploreService.plantsNew
        ].find(
            (p: any) => p.id === task.id
        );

        if (plant) {

            await this.exploreService.changePeopleNeeded(
                plant,
                1
            );
            plant.peopleNeeded++;
            this.saving.iHelpDown();
        }

        // Task entfernen basieren auf ID
        this.task = this.task.filter(
            (t: any) => t.id !== task.id
        );

        this.persist();
    }
}
