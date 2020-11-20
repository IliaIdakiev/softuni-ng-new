import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { AsideComponent } from './aside/aside.component';

@NgModule({
  declarations: [
    LoaderComponent,
    AsideComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    AsideComponent
  ]
})
export class SharedModule { }
