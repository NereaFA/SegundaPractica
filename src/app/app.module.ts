import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { OutputBtnComponent } from './output-btn/output-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    CardComponent,
    ListComponent,
    OutputBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
