import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleGridComponent } from './example-grid/example-grid.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    ExampleGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
