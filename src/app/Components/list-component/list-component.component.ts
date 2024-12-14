import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list-component',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './list-component.component.html',
  styleUrl: './list-component.component.css'
})
export class ListComponentComponent {

  @Input() list!: { name: string, cards: { name: string, description: string }[] };

}
