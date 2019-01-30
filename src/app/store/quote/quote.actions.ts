import { Action } from '@ngrx/store';
import { Quote } from '../quote/quote.models';

export enum QuoteActionTypes {
  FETCH_QUOTE = '[QUOTE] FETCH_QUOTE',
  FETCH_QUOTE_SUCCESS = '[QUOTE] FETCH_QUOTE_SUCCESS',
  FETCH_QUOTE_ERROR = '[QUOTE] FETCH_QUOTE_ERROR',
  SAVE_QUOTE = '[QUOTE] SAVE_QUOTE',
  SAVE_QUOTE_SUCCESS = '[QUOTE] SAVE_QUOTE_SUCCESS',
  SAVE_QUOTE_ERROR = '[QUOTE] SAVE_QUOTE_ERROR',
  CHANGE_NAME = '[QUOTE] CHANGE_NAME',
  CHANGE_DETAILS = '[QUOTE] CHANGE_DETAILS',
  PATCH_USER = '[QUOTE] PATCH_USER',
  MUTATE_ERROR = '[QUOTE] MUTATE_ERROR'
}

export class FectchQuote implements Action {
  readonly type = QuoteActionTypes.FETCH_QUOTE;
}

export class FectchQuoteSuccess implements Action {
  readonly type = QuoteActionTypes.FETCH_QUOTE_SUCCESS;
  payload: {
    quote: Quote,
    lastUpated: string
  };

  constructor(quote: Quote) {
    this.payload = {
      quote: quote,
      lastUpated: (new Date()).toISOString()
    };
  }
}

export class FectchQuoteError implements Action {
  readonly type = QuoteActionTypes.FETCH_QUOTE_ERROR;
  constructor(public payload: { error: string }) {}
}

export class SaveQuote implements Action {
  readonly type = QuoteActionTypes.SAVE_QUOTE;
}

export class SaveQuoteSuccess implements Action {
  readonly type = QuoteActionTypes.SAVE_QUOTE_SUCCESS;
  payload: {
    quote: Quote,
    lastUpated: string
  };

  constructor(quote: Quote) {
    this.payload = {
      quote: quote,
      lastUpated: (new Date()).toISOString()
    };
  }
}

export class SaveQuoteError implements Action {
  readonly type = QuoteActionTypes.SAVE_QUOTE_ERROR;
  constructor(public payload: { error: string }) {}
}

export class ChangeName implements Action {
  readonly type = QuoteActionTypes.CHANGE_NAME;
  constructor(public payload: { firstName: string; lastName: string }) {}
}

export class ChangeDetails implements Action {
  readonly type = QuoteActionTypes.CHANGE_DETAILS;
  constructor(public payload: { age: number; address: string }) {}
}

export class MutateError implements Action {
  readonly type = QuoteActionTypes.MUTATE_ERROR;
}

export type QuoteActionsUnion = FectchQuote | FectchQuoteSuccess | FectchQuoteError |
                                SaveQuote | SaveQuoteSuccess | SaveQuoteError |
                                ChangeName | ChangeDetails | MutateError;
