import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { QuoteService } from 'src/app/services/quote.service';
import { QuoteActionTypes, FectchQuoteError, FectchQuoteSuccess } from './quote.actions';
import { Router } from '@angular/router';

@Injectable()
export class QuoteEffects {

  @Effect()
  loadQuote$ = this.actions$.pipe(
    ofType(QuoteActionTypes.FETCH_QUOTE),
    mergeMap(() => this.quoteService.getQuote()
      .pipe(
        map(quote => new FectchQuoteSuccess({ quote: quote })),
        catchError(err => of(new FectchQuoteError({ error: err })))
      )
    )
  );

  @Effect()
  interstitialSuccessRedirect$ = this.actions$.pipe(
    ofType(QuoteActionTypes.FETCH_QUOTE_SUCCESS),
    mergeMap(() => {
      if (this.router.url === '/') {
        this.router.navigateByUrl('/route-a');
      }
      return EMPTY;
    })
  );

  @Effect()
  interstitialErrorRedirect$ = this.actions$.pipe(
    ofType(QuoteActionTypes.FETCH_QUOTE_ERROR),
    mergeMap(payload => {
      this.router.navigateByUrl('/error');
      return EMPTY;
    })
  );

  constructor(
    private actions$: Actions,
    private quoteService: QuoteService,
    private router: Router
  ) {}
}
