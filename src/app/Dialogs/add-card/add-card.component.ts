import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Card, List } from '../../Model/list';
import { AppAutoFocusDirective } from '../../Directives/app-auto-focus.directive';

@Component({
  selector: 'app-add-card',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose],
  templateUrl: './add-card.component.html',
  styleUrl: './add-card.component.css'
})
export class AddCardComponent {

  readonly dialogRef = inject(MatDialogRef<AddCardComponent>);
  readonly data = inject<DialogModel>(MAT_DIALOG_DATA);
  card = this.data.card;
  isNew = this.data.isNew
  constructor() {
  }

}


export class DialogModel {
  card!: Card;
  isNew!: Boolean;
}