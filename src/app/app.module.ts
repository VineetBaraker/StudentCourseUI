import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentdetailComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
