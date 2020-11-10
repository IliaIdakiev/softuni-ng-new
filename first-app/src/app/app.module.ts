import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NameInputComponent } from './name-input/name-input.component';
import { TestComponent } from './test/test.component';
import { apiURLProvider, MyService } from './providers';


// APP MODUlE ---------------
// |                        |
// |                        |
// DIC                      Components
//  -- API URL ------|------> App Component (API URL, MY SERVICE)
//  -- MY SERVICE -----------> Test Component (MY SERVICE)


@NgModule({
  declarations: [
    AppComponent,
    NameInputComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    apiURLProvider,
    MyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
