// src/app/dashboard/dashboard.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.modules';

import { DashboardComponent } from './dashboard.component';
import { NoteInputComponent } from './note-input/note-input.component';
// Add other dashboard components as you build them
import {ArchiveComponent} from "../archive/archive.component";
import {TrashComponent} from "../trash/trash.component";

import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  declarations: [
    DashboardComponent,
    NoteInputComponent,
    ArchiveComponent,
    TrashComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {}