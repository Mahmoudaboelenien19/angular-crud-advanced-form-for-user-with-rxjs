import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersListComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-crud-user-with-rxjs';
}
