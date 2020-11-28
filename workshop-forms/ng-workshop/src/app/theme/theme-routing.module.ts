import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { DetailComponent } from './detail/detail.component';
import { NewComponent } from './new/new.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  {
    path: 'theme',
    canActivateChild: [AuthGuard],
    children: [
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
    ]
  }
];

export const ThemeRouterModule = RouterModule.forChild(routes);
