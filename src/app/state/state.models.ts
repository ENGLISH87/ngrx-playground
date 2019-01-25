import { JourneyState, INITIAL_JOURNEY_STATE } from './journey/journey.models';
import { QuoteState, INITIAL_QUOTE_STATE } from './quote/quote.models';

export const INITIAL_APP_STATE = {
  journey: INITIAL_JOURNEY_STATE,
  quote: INITIAL_QUOTE_STATE
};

export interface AppState {
  journey: JourneyState;
  quote: QuoteState;
}
