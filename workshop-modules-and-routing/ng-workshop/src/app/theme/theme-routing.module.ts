import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { NewComponent } from './new/new.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  {
    path: 'theme',
    pathMatch: 'full',
    component: ThemeComponent,
    data: {
      title: 'THEME'
    }
  },
  {
    path: 'theme/new',
    component: NewComponent,
    data: {
      title: 'NEW THEME'
    }
  },
  {
    path: 'theme/detail/:id',
    component: DetailComponent,
    data: {
      title: 'THEME DETAIL'
    }
  }
];

export const ThemeRouterModule = RouterModule.forChild(routes);
