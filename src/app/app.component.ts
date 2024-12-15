import { Component } from '@angular/core';
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


@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatIconModule, CdkDropList, CdkDropListGroup, CdkDrag],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kanban-board-angular';
  kanbanData = data;

  drop(event: CdkDragDrop<{ name: string; description: string; }[]>) {
    console.log(event)
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
}
