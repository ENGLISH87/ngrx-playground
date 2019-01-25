import { AppState } from '../state.models';
import { createSelector } from '@ngrx/store';
import { QuoteState } from './quote.models';

export const selectQuote = (state: AppState) => state.quote;
export const selectLastName = (state: AppState) => state.quote.quote.lastName;

export const selectQuoteDetails = createSelector(
  selectQuote,
  (state: QuoteState) => state.quote.details
);
