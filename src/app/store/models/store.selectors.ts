import { createSelector } from '@ngrx/store';
import { AppState, JourneyState, QuoteState } from './store.models';

export const selectJourney = (state: AppState) => state.journey;
export const selectQuote = (state: AppState) => state.quote;
export const selectLastName = (state: AppState) => state.quote.quote.lastName;

export const selectJourneyCount = createSelector(
  selectJourney,
  (state: JourneyState) => state.count
);

export const selectQuoteDetails = createSelector(
  selectQuote,
  (state: QuoteState) => state.quote.details
);
