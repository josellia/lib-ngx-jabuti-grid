import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxJabutiGridModule } from 'ngx-jabuti-grid';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxJabutiGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
