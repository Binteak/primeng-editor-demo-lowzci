import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';

import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EditorModule,
    ButtonModule,
    FormsModule,
    DropdownModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
