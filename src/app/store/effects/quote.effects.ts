import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { QuoteService } from 'src/app/services/quote.service';
import { QuoteActions, FectchQuoteError, FectchQuoteSuccess } from '../actions/quote.actions';

@Injectable()
export class QuoteEffects {

  @Effect()
  loadQuote$ = this.actions$.pipe(
    ofType(QuoteActions.FETCH_QUOTE),
    mergeMap(() => this.quoteService.getQuote()
      .pipe(
        map(quote => new FectchQuoteSuccess({ quote: quote })),
        catchError(err => of(new FectchQuoteError({ error: err })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private quoteService: QuoteService
  ) {}
}
