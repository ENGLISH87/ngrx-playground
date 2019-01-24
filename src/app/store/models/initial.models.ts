import { QuoteState, JourneyState } from './store.models';

export const INITIAL_JOURNEY_STATE: JourneyState = {
  currentPage: null,
  pcw: null,
  count: 0,
  router: null
};

export const INITIAL_QUOTE_STATE: QuoteState = {
  isFetching: false,
  receivedAt: null,
  error: null,
  quote: {
    id: 1,
    firstName: '',
    lastName: '',
    details: {
      age: null,
      occupation: 'Software Developer',
      address: 'Reigate, UK'
    },
  }
};

export const INITIAL_APP_STATE = {
  journey: INITIAL_JOURNEY_STATE,
  quote: INITIAL_QUOTE_STATE
};
