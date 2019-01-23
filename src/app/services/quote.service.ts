import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {

  constructor(
  ) {
  }

  public getQuote(): void {

    /* this.redux.dispatch(this.quoteActions.fetchQuote());

    const qRes = INITIAL_QUOTE_STATE;
    qRes.quote.firstName = 'Shaun';
    qRes.quote.lastName = 'English';

    of(qRes).pipe(
      delay(3000)
    ).subscribe((q: IQuoteState) => {
      this.redux.dispatch(this.quoteActions.updateQuote(q.quote));
    }); */
  }
}
