import { SerializedRouterStateSnapshot } from '@ngrx/router-store';

export const INITIAL_JOURNEY_STATE: JourneyState = {
  currentPage: null,
  pcw: null,
  count: 0,
  url: '',
  router: null
};

export interface JourneyState {
  currentPage: string;
  pcw: string;
  count: number;
  url: string;
  router: SerializedRouterStateSnapshot;
}

