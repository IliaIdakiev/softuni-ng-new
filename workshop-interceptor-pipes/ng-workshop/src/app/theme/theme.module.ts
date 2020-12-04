import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { ThemeService } from './theme.service';
import { ThemeRouterModule } from './theme-routing.module';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from '../shared/shared.module';
import { NewComponent } from './new/new.component';
import { ThemeComponent } from './theme/theme.component';
import { PostModule } from '../post/post.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ThemeListComponent,
    ThemeListItemComponent,
    DetailComponent,
    NewComponent,
    ThemeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PostModule,
    FormsModule,
    ThemeRouterModule
  ],
  providers: [
    ThemeService
  ],
  exports: [
    ThemeListComponent,
    ThemeListItemComponent
  ]
})
export class ThemeModule { }
