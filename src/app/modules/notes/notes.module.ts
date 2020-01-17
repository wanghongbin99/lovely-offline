import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesAddComponent } from './notes-add/notes-add.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { NoteFormComponent } from './note-form/note-form.component';


@NgModule({
  declarations: [NotesListComponent, NotesAddComponent, NoteDetailsComponent, NoteCardComponent, NoteFormComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    SharedModule
  ]
})
export class NotesModule { }
