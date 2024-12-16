import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import data from '../assets/data.json'
import { MatButtonModule } from '@angular/material/button';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
} from '@angular/cdk/drag-drop';
import { Card, List } from './Model/list';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddCardComponent } from './Dialogs/add-card/add-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AppAutoFocusDirective } from './Directives/app-auto-focus.directive';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatIconModule, CdkDropList, CdkDropListGroup, CdkDrag, MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    AppAutoFocusDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kanban-board-angular';
  kanbanData: List[] = data;
  @ViewChild('body') body!: ElementRef<any>;
  editingList: string = '';

  constructor(private dialog: MatDialog) {

  }

  drop(event: CdkDragDrop<{ name: string; description: string; }[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  addList() {
    this.kanbanData.push(new List({ name: 'New List ' + (this.kanbanData.length + 1), cards: [] }));
    setTimeout(() => {
      this.body.nativeElement.scrollTo({ left: (this.body.nativeElement.scrollWidth), behavior: 'smooth' });
    }, 100);
  }

  addCard(list: List, listDiv: HTMLDivElement) {
    let addDialog = this.dialog.open(AddCardComponent, { minWidth: '40%', data: { card: new Card(), isNew: true } });
    addDialog.afterClosed().subscribe((response) => {
      if (response) {
        list.cards.push(response);
        setTimeout(() => {
          listDiv.scrollTo({ top: (listDiv.scrollHeight), behavior: 'smooth' });
        }, 100);
      }
    })
  }

  editCard(card: Card) {
    let addDialog = this.dialog.open(AddCardComponent, { minWidth: '40%', data: { card: new Card(card), isNew: false } });
    addDialog.afterClosed().subscribe((response) => {
      if (response) {
        card.name = response.name;
        card.description = response.description;
      }
    })
  }

  removeCard(event: Event, card: Card, list: List) {
    event.stopImmediatePropagation();
    list.cards.splice(list.cards.indexOf(card), 1)
  }

  removeList(list: List) {
    this.kanbanData.splice(this.kanbanData.indexOf(list), 1);
  }

}
