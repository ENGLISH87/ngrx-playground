import * as QuoteActions from '../actions/quote.actions';
import { tassign } from 'tassign';
import { QuoteState, Quote, } from '../models/store.models';
import { INITIAL_QUOTE_STATE } from '../models/initial.models';

export const quoteReducer = (lastState: QuoteState = INITIAL_QUOTE_STATE, action: QuoteActions.QuoteActionsUnion) => {
  switch (action.type) {

    case QuoteActions.QuoteActions.CHANGE_NAME:
      const quote = tassign(lastState.quote, <Quote>{
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      });
      return tassign(lastState, {
        quote: quote
      });

    case QuoteActions.QuoteActions.CHANGE_DETAILS:
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

    case QuoteActions.QuoteActions.FETCH_QUOTE:
      return tassign(lastState, {
        isFetching: true
      });

    case QuoteActions.QuoteActions.FETCH_QUOTE_ERROR:
      return tassign(lastState, <QuoteState>{
        isFetching: false,
        error: action.payload.error,
        quote: null
      });

    case QuoteActions.QuoteActions.FETCH_QUOTE_SUCCESS:
      return lastState;

    case QuoteActions.QuoteActions.UPDATE_QUOTE:
      return tassign(lastState, {
        isFetching: false,
        receivedAt: action.payload.receivedAt,
        quote: {
          ...action.payload.quote
        }
      });

    case QuoteActions.QuoteActions.MUTATE_ERROR:
      lastState.isFetching = true;
      lastState.error = 'Error occurred';
      return lastState;

    default: return lastState;
  }
}