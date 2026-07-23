import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'tabs/map',
    pathMatch: 'full'
  },


  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.routes')
        .then((m) => m.routes)
  },
  {
    path: 'plant-detail',
    loadComponent: () => import('./pages/plant-detail/plant-detail.page').then( m => m.PlantDetailPage)
  },

  {
    path: 'plant/:id', 
    loadComponent: () =>
      import('./pages/plant-detail/plant-detail.page')
        .then(m => m.PlantDetailPage)
  },
  {
    path: 'new-question',
    loadComponent: () => import('./pages/new-question/new-question.page').then( m => m.NewQuestionPage)
  }

];