import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { NewComponent } from './new/new.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ThemeComponent,
    data: {
      title: 'THEME'
    }
  },
  {
    path: 'new',
    component: NewComponent,
    data: {
      title: 'NEW THEME',
      isLogged: true
    }
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    data: {
      title: 'THEME DETAIL',
      isLogged: true
    }
  }
];

export const ThemeRouterModule = RouterModule.forChild(routes);
