import * as Quote from './store/actions/quote.actions';
import * as Journey from './store/actions/journey.actions';
import * as Selectors from './store/models/store.selectors';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CLEAR_STATE } from './store/reducers/root.reducer';
import { Store, select } from '@ngrx/store';
import { AppState, PersonDetails } from './store/models/store.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  count$: Observable<number>;
  state$: Observable<AppState>;
  details$: Observable<PersonDetails>;
  lastName$: Observable<string>;

  constructor(
    private _store: Store<AppState>
  ) {
    this.state$ = this._store;
    this.count$ = this._store.pipe(
      select(Selectors.selectJourneyCount),
    );
    this.lastName$ = this._store.pipe(
      select(Selectors.selectLastName)
    );
    this.details$ = this._store.select(Selectors.selectQuoteDetails);
  }

  increment(): void {
    this._store.dispatch(new Journey.IncrementCount());
  }

  decrement(): void {
    this._store.dispatch(new Journey.DecrementCount());
  }

  changeName(): void {
    this._store.dispatch(new Quote.ChangeName({ firstName: 'Shaun', lastName: 'English' }));
  }

  changeDetails(): void {
    this._store.dispatch(new Quote.ChangeDetails({ age: 31, address: 'London, UK' }));
  }

  changeError(): void {
    this._store.dispatch(new Quote.MutateError());
  }

  setPcw(): void {
    this._store.dispatch(new Journey.SetPcw({ pcw: 'gocompare' }));
  }

  resetState(): void {
    this._store.dispatch({ type: CLEAR_STATE });
  }
}
