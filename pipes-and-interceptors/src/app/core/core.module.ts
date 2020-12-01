import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { appInterceptorProvider } from './app.interceptor';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    appInterceptorProvider
  ],
  exports: [
    NavigationComponent
  ]
})
export class CoreModule { }
