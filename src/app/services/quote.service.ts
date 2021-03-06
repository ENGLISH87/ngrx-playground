import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Quote, INITIAL_QUOTE_STATE } from '../store/quote/quote.models';

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

    // return throwError('Get Quote Service Error');
    return of(qRes.quote).pipe(
      delay(3000)
    );
  }

  public saveQuote(): Observable<Quote> {
    const qRes = Object.assign({}, {
      ...INITIAL_QUOTE_STATE,
      quote: {
        ...INITIAL_QUOTE_STATE.quote,
        firstName: 'Shaun',
        lastName: 'English (SAVED QUOTE RESPONSE)'
      }
    });

    return of(qRes.quote).pipe(
      delay(3000)
    );
  }
}
