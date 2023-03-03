import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';

import { DropdownModule } from 'primeng/dropdown';

import { FileUploadModule } from 'primeng/fileupload';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';

import { TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';
import { TooltipModule } from 'primeng/tooltip';

import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MultiSelectModule } from 'primeng/multiselect';
import { MessageModule } from 'primeng/message';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToolbarModule } from 'primeng/toolbar';

import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';

import { HeaderComponent } from './header/header.component';
import { TemplatesFillerComponent } from './templates-filler/templates-filler.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EditorModule,
    ButtonModule,
    FormsModule,
    DropdownModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule,
    ButtonModule,
    TableModule,
    DynamicDialogModule,
    DialogModule,
    BrowserAnimationsModule,
    ProgressSpinnerModule,
    TooltipModule,
    TreeTableModule,
    InputTextModule,
    InputNumberModule,
    SelectButtonModule,
    CheckboxModule,
    InputSwitchModule,
    MultiSelectModule,
    DropdownModule,
    MessageModule,
    ConfirmDialogModule,
    StepsModule,
    ToolbarModule,
    CardModule,
    PanelModule,
  ],
  declarations: [AppComponent, HeaderComponent, TemplatesFillerComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
