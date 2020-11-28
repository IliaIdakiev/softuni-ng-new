import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { LazyRoutingModule } from './test/lazy-routing.module';



@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
