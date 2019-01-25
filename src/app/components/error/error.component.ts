import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/store.models';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent {
  error$: Observable<string>;

  constructor(
    private _store: Store<AppState>
  ) {
    this.error$ = this._store.select(store => store.quoteState.error);
  }
}
