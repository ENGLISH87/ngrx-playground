import { createSelector } from '@ngrx/store';
import { AppState } from '../store.models';
import { JourneyState } from './journey.models';

export const selectJourney = (state: AppState) => state.journeyState;

export const selectJourneyCount = createSelector(
  selectJourney,
  (state: JourneyState) => state.count
);
