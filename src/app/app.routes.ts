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
  }

];