import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { AvgAgePipe } from './avg-age.pipe';



@NgModule({
  declarations: [
    LoaderComponent,
    AvgAgePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    AvgAgePipe
  ]
})
export class SharedModule { }
