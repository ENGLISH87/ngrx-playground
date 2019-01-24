import { of, Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Quote } from '../store/models/store.models';
import { Injectable } from '@angular/core';
import { INITIAL_QUOTE_STATE } from '../store/models/initial.models';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {

  constructor() {}

  /**
   * Fetch mock quote with delay to minic http request
   */
  public getQuote(): Observable<Quote> {
    const qRes = Object.assign({}, {
      ...INITIAL_QUOTE_STATE,
      quote: {
        ...INITIAL_QUOTE_STATE.quote,
        firstName: 'Shaun',
        lastName: 'English'
      }
    });

    return of(qRes.quote).pipe(
      delay(3000),
      tap(() => {
        console.groupCollapsed('quoteRequest');
        console.log('Quote Recieved');
        console.groupEnd();
      })
    );
  }
}
