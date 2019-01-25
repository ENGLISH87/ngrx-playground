import { createSelector } from '@ngrx/store';
import { AppState } from '../store.models';
import { JourneyState } from './journey.models';

export const selectJourney = (state: AppState) => state.journey;

export const selectJourneyCount = createSelector(
  selectJourney,
  (state: JourneyState) => state.count
);
