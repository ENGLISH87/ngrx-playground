import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of, EMPTY, Observable } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { QuoteService } from 'src/app/services/quote.service';
import { QuoteActionTypes, FectchQuoteError, FectchQuoteSuccess, SaveQuoteSuccess, SaveQuoteError } from './quote.actions';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';

@Injectable()
export class QuoteEffects {

  /**
   * On FETCH_QUOTE, call quote service getQuote to retrive most currenty quote.
   * OnSuccess: return new FectchQuoteSuccess action.
   * OnError: return new FectchQuoteError action.
   */
  @Effect()
  loadQuote$: Observable<Action> = this.actions$.pipe(
    ofType(QuoteActionTypes.FETCH_QUOTE),
    mergeMap(() => this.quoteService.getQuote()
      .pipe(
        map(quote => new FectchQuoteSuccess(quote)),
        catchError(err => of(new FectchQuoteError({ error: err })))
      )
    )
  );

  /**
   * On FETCH_QUOTE_SUCCESS, redirect user to landing page if currently on
   * interstitial page.
   */
  @Effect({ dispatch: false })
  interstitialSuccessRedirect$: Observable<never> = this.actions$.pipe(
    ofType(QuoteActionTypes.FETCH_QUOTE_SUCCESS),
    tap(() => {
      if (this.router.url === '/') {
        this.router.navigateByUrl('/route-a');
      }
    })
  );

  /**
   * On FETCH_QUOTE_ERROR, redirect user to error page if currently on
   * interstitial page
   */
  @Effect({ dispatch: false })
  interstitialErrorRedirect$: Observable<never> = this.actions$.pipe(
    ofType(QuoteActionTypes.FETCH_QUOTE_ERROR),
    tap(() => {
      if (this.router.url === '/') {
        this.router.navigateByUrl('/error');
      }
    })
  );

  /**
   * On SAVE_QUOTE, call quote service saveQuote to save quote, which returns an updated quote.
   * OnSuccess: return new SaveQuoteSuccess action
   * OnError: return new SaveQuoteError action
   */
  @Effect()
  saveQuote$: Observable<Action> = this.actions$.pipe(
    ofType(QuoteActionTypes.SAVE_QUOTE),
    mergeMap(() => this.quoteService.saveQuote()
      .pipe(
        map(quote => new SaveQuoteSuccess(quote)),
        catchError(err => of(new SaveQuoteError({ error: err })))
      )
    )
  );

  /**
   * On SAVE_QUOTE_ERROR, redirct user to error page.
   */
  @Effect({ dispatch: false })
  saveQuoteError$: Observable<never> = this.actions$.pipe(
    ofType(QuoteActionTypes.SAVE_QUOTE_ERROR),
    tap(() => {
      this.router.navigateByUrl('/error');
    })
  );

  constructor(
    private actions$: Actions,
    private quoteService: QuoteService,
    private router: Router
  ) {}
}
