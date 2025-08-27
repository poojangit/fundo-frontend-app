
// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent} from "./sidebar/sidebar.component";
import { NoteCardComponent } from './note-card/note-card.component';
import { NoteToolbarComponent } from './note-toolbar/note-toolbar.component';
import { RouterModule } from '@angular/router';
import { SearchNotesPipe } from './pipes/search-notes.pipe';

@NgModule({
  declarations: [
    HeaderComponent,  // All shared components here
    SidebarComponent, NoteCardComponent, NoteToolbarComponent, SearchNotesPipe,
  ],
  imports: [
    CommonModule,
    FormsModule  ,     // For ngModel in search bar, etc.
    RouterModule

  ],
  exports: [
    HeaderComponent,
    CommonModule,
    FormsModule,       // So feature modules using SharedModule get them
    SidebarComponent,
    NoteCardComponent,         //  Export for use in Dashboard
    NoteToolbarComponent,     //  Export for use in NoteCard
    RouterModule,
    SearchNotesPipe
  ]
})
export class SharedModule { }
