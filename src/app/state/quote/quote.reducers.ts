import * as QuoteActions from './quote.actions';
import { tassign } from 'tassign';
import { QuoteState, Quote, INITIAL_QUOTE_STATE, } from '../quote/quote.models';

export const quoteReducer = (lastState: QuoteState = INITIAL_QUOTE_STATE, action: QuoteActions.QuoteActionsUnion) => {
  switch (action.type) {

    case QuoteActions.QuoteActionTypes.CHANGE_NAME:
      const quote = tassign(lastState.quote, <Quote>{
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      });
      return tassign(lastState, {
        quote: quote
      });

    case QuoteActions.QuoteActionTypes.CHANGE_DETAILS:
      const details = tassign(lastState.quote.details, {
        age: action.payload.age,
        address: action.payload.address
      });

      return tassign(lastState, <QuoteState>{
        ...lastState,
        quote: {
          ...lastState.quote,
          details: details
        }
      });

    case QuoteActions.QuoteActionTypes.FETCH_QUOTE:
      return tassign(lastState, {
        isFetching: true
      });

    case QuoteActions.QuoteActionTypes.FETCH_QUOTE_ERROR:
      return tassign(lastState, <QuoteState>{
        isFetching: false,
        error: action.payload.error,
        quote: null
      });

    case QuoteActions.QuoteActionTypes.FETCH_QUOTE_SUCCESS:
      return tassign(lastState, <QuoteState>{
        isFetching: false,
        error: '',
        receivedAt: action.payload.receivedAt,
        quote: {
          ...action.payload.quote,
        }
      });

    case QuoteActions.QuoteActionTypes.MUTATE_ERROR:
      lastState.isFetching = true;
      lastState.error = 'Error occurred';
      return lastState;

    default: return lastState;
  }
};
