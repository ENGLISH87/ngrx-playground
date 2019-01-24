import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { QuoteActions } from '../actions/quote.actions';
import { EMPTY } from 'rxjs';

@Injectable()
export class RouterEffects {

  @Effect()
  interstitialSuccessRedirect$ = this.actions$.pipe(
    ofType(QuoteActions.FETCH_QUOTE_SUCCESS),
    mergeMap(() => {
      if (this.router.url === '/') {
        this.router.navigateByUrl('/route-a');
      }
      return EMPTY;
    })
  );

  @Effect()
  interstitialErrorRedirect$ = this.actions$.pipe(
    ofType(QuoteActions.FETCH_QUOTE_ERROR),
    mergeMap(() => this.router.navigateByUrl('/error'))
  );

  constructor(
    private actions$: Actions,
    private router: Router
  ) {}
}
