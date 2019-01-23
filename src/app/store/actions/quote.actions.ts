import { Action } from '@ngrx/store';
import { Quote } from '../models/store.models';

export enum QuoteActions {
  FETCH_QUOTE = 'FETCH_QUOTE',
  FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS',
  FETCH_QUOTE_ERROR = 'FETCH_QUOTE_ERROR',
  UPDATE_QUOTE = 'UPDATE_QUOTE',
  SAVE_QUOTE = 'SAVE_QUOTE',
  CHANGE_NAME = 'CHANGE_NAME',
  CHANGE_DETAILS = 'CHANGE_DETAILS',
  PATCH_USER = 'PATCH_USER',
  MUTATE_ERROR = 'MUTATE_ERROR'
}

export class FectchQuote implements Action {
  readonly type = QuoteActions.FETCH_QUOTE;
}

export class FectchQuoteSuccess implements Action {
  readonly type = QuoteActions.FETCH_QUOTE_SUCCESS;
}

export class FectchQuoteError implements Action {
  readonly type = QuoteActions.FETCH_QUOTE_ERROR;
  constructor(public payload: { error: string }) {}
}

export class UpdateQuote implements Action {
  readonly type = QuoteActions.UPDATE_QUOTE;
  constructor(public payload: { receivedAt: string, quote: Quote }) {}
}

export class SaveQuote implements Action {
  readonly type = QuoteActions.SAVE_QUOTE;
}

export class ChangeName implements Action {
  readonly type = QuoteActions.CHANGE_NAME;
  constructor(public payload: { firstName: string; lastName: string }) {}
}

export class ChangeDetails implements Action {
  readonly type = QuoteActions.CHANGE_DETAILS;
  constructor(public payload: { age: number; address: string }) {}
}

export class MutateError implements Action {
  readonly type = QuoteActions.MUTATE_ERROR;
}

export type QuoteActionsUnion = FectchQuote | FectchQuoteSuccess |
                                FectchQuoteError | UpdateQuote | SaveQuote |
                                ChangeName | ChangeDetails | MutateError;
