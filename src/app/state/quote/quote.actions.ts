import { Action } from '@ngrx/store';
import { Quote } from '../quote/quote.models';

export enum QuoteActionTypes {
  FETCH_QUOTE = 'FETCH_QUOTE',
  FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS',
  FETCH_QUOTE_ERROR = 'FETCH_QUOTE_ERROR',
  SAVE_QUOTE = 'SAVE_QUOTE',
  CHANGE_NAME = 'CHANGE_NAME',
  CHANGE_DETAILS = 'CHANGE_DETAILS',
  PATCH_USER = 'PATCH_USER',
  MUTATE_ERROR = 'MUTATE_ERROR'
}

export class FectchQuote implements Action {
  readonly type = QuoteActionTypes.FETCH_QUOTE;
}

export class FectchQuoteSuccess implements Action {
  readonly type = QuoteActionTypes.FETCH_QUOTE_SUCCESS;
  payload: {
    quote: Quote,
    receivedAt: string
  };

  constructor(payload: { quote: Quote }) {
    this.payload = {
      quote: payload.quote,
      receivedAt: (new Date()).toISOString()
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

export type QuoteActionsUnion = FectchQuote | FectchQuoteSuccess |
                                FectchQuoteError | SaveQuote |
                                ChangeName | ChangeDetails | MutateError;
