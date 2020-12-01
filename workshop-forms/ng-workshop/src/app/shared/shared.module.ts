import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { AsideComponent } from './aside/aside.component';
import { EmailValidatorDirective } from './email-validator.directive';
import { SubmitOnValidDirective } from './dir.directive';

@NgModule({
  declarations: [
    LoaderComponent,
    AsideComponent,
    EmailValidatorDirective,
    SubmitOnValidDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    AsideComponent,
    EmailValidatorDirective,
    SubmitOnValidDirective
  ]
})
export class SharedModule { }
