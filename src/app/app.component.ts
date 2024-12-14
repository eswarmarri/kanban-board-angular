import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import data from '../assets/data.json'
import { ListComponentComponent } from './Components/list-component/list-component.component';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatIconModule, ListComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kanban-board-angular';
  kanbanData = data;
}
