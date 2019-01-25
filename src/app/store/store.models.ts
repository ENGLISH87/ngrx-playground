import { JourneyState, INITIAL_JOURNEY_STATE } from './journey/journey.models';
import { QuoteState, INITIAL_QUOTE_STATE } from './quote/quote.models';
import { INITIAL_DRAWER_STATE, DrawerState } from './drawer/drawer.models';

export const INITIAL_APP_STATE: AppState = {
  journeyState: INITIAL_JOURNEY_STATE,
  quoteState: INITIAL_QUOTE_STATE,
  drawerState: INITIAL_DRAWER_STATE
};

export interface AppState {
  journeyState: JourneyState;
  quoteState: QuoteState;
  drawerState: DrawerState;
}
