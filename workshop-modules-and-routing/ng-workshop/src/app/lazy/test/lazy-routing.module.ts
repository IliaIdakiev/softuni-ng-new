import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TestComponent,
    data: {
      test: 123
    }
  }
];

export const LazyRoutingModule = RouterModule.forChild(routes);
