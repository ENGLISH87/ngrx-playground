import * as Quote from '../../store/quote/quote.actions';
import * as Journey from '../../store/journey/journey.actions';
import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CLEAR_STATE } from '../../store/store.reducer';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/store.models';
import { PersonDetails } from 'src/app/store/quote/quote.models';
import * as JourneySelectors from 'src/app/store/journey/journey.selectors';
import * as QuoteSelectors from 'src/app/store/quote/quote.selectors';

@Component({
  selector: 'app-route-a',
  templateUrl: './route-a.component.html',
  styleUrls: ['./route-a.component.scss']
})
export class RouteAComponent {
  count$: Observable<number>;
  state$: Observable<AppState>;
  details$: Observable<PersonDetails>;
  lastName$: Observable<string>;
  loadingQuote$: Observable<boolean>;
  stateSub: Subscription;
  savingQuote$: Observable<boolean>;

  constructor(
    private _store: Store<AppState>
  ) {
    this.state$ = this._store;
    this.count$ = this._store.select(JourneySelectors.selectJourneyCount);
    this.lastName$ = this._store.select(QuoteSelectors.selectLastName);
    this.details$ = this._store.select(QuoteSelectors.selectQuoteDetails);
    this.loadingQuote$ = this._store.select(quote => quote.quoteState.isFetching);
    this.savingQuote$ = this._store.select(quote => quote.quoteState.isSaving);
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

  saveQuote(): void {
    this._store.dispatch(new Quote.SaveQuote());
  }

  resetState(): void {
    this._store.dispatch({ type: CLEAR_STATE });
  }
}
