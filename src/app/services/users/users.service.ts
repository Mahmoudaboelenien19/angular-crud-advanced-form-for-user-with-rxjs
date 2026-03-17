import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, merge, Observable, scan, startWith } from 'rxjs';
import { GlobalObservablesHandlerService } from '../globalObservablesHandler/global-observables-handler.service';
import { User } from '../../models/user.model';
const Page_Size = 5;
type EffectMap = {
  getAll: { users: User[] };
};

type UsersEffect = {
  [K in keyof EffectMap]: { type: K } & EffectMap[K];
}[keyof EffectMap];
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);
  private _ob_handler = inject(GlobalObservablesHandlerService);
  page = new BehaviorSubject(0);
  getLoading = new BehaviorSubject(false);
  getLoading$ = this.getLoading.asObservable();
  constructor() {}
  users$: Observable<User[]> = merge(this.getAllUsersWithHandler()).pipe(
    scan((users, event) => {
      switch (event.type) {
        case 'getAll':
          return event.users;
        default:
          return users;
      }
    }, [] as User[]),
    startWith([]),
  );
  getAllUsers() {
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  getAllUsersWithHandler(): Observable<UsersEffect> {
    return this._ob_handler
      .withLoadingAndError(this.getAllUsers(), this.getLoading)
      .pipe(map((users) => ({ users, type: 'getAll' })));
  }
}
