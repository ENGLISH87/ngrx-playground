import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as Quote from '../../store/quote/quote.actions';
import { AppState } from 'src/app/store/store.models';

@Component({
  selector: 'app-interstitial',
  templateUrl: './interstitial.component.html'
})
export class InterstitialComponent implements OnDestroy {
  loadingQuote$: Observable<boolean>;
  stateSub: Subscription;

  constructor(
    private _store: Store<AppState>
  ) {
    this.loadingQuote$ = this._store.select(store => store.quoteState.isFetching);

    // always load new quote
    this._store.dispatch(new Quote.FectchQuote());
  }

  ngOnDestroy(): void {
    if (this.stateSub) { this.stateSub.unsubscribe(); }
  }
}
