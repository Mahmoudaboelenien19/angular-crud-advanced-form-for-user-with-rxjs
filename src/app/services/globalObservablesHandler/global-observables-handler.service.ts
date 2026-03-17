import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  EMPTY,
  finalize,
  map,
  Observable,
} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GlobalObservablesHandlerService {
  constructor() {}

  withLoadingAndError<T>(
    source: Observable<T>,
    loading: BehaviorSubject<boolean>,
  ) {
    loading.next(true);
    return source.pipe(
      map((res) => res),
      finalize(() => {
        loading.next(false);
      }),
      catchError((e) => {
        console.log(e.message);
        return EMPTY;
      }),
    );
  }
}
