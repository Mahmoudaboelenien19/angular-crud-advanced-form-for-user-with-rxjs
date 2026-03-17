import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';

import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    CommonModule,
  ],
  templateUrl: './user-card.component.html',
})
export class UserCardComponent {
  @Input() user!: User;
  onEdit() {}
  onDelete() {}
}
