import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [

  {
    path: '',
    component: TabsPage,
    children: [

      {
        path:'map',
        loadComponent: () =>
        import('../pages/map/map.page')
        .then(m => m.MapPage)
      },


      {
        path:'explore',
        loadComponent: () =>
        import('../pages/explore/explore.page')
        .then(m => m.ExplorePage)
      },


      {
        path:'community',
        loadComponent: () =>
        import('../pages/community/community.page')
        .then(m => m.CommunityPage)
      },


      {
        path:'calendar',
        loadComponent: () =>
        import('../pages/calendar/calendar.page')
        .then(m => m.CalendarPage)
      },


      {
        path:'profile',
        loadComponent: () =>
        import('../pages/profile/profile.page')
        .then(m => m.ProfilePage)
      },


      {
        path:'',
        redirectTo:'map',
        pathMatch:'full'
      }


    ]
  }

];