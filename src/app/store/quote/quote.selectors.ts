import { AppState } from '../store.models';
import { createSelector } from '@ngrx/store';
import { QuoteState } from './quote.models';

export const selectQuote = (state: AppState) => state.quoteState;
export const selectLastName = (state: AppState) => state.quoteState.quote.lastName;

export const selectQuoteDetails = createSelector(
  selectQuote,
  (state: QuoteState) => state.quote.details
);
