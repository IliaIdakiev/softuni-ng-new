import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service';

@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostListComponent
  ]
})
export class PostModule {
  static forRoot(): ModuleWithProviders<PostModule> {
    return {
      ngModule: PostModule,
      providers: [
        PostService
      ]
    };
  }
}
