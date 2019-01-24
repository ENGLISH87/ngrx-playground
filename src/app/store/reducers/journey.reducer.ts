import * as Journey from '../actions/journey.actions';
import { tassign } from 'tassign';
import { INITIAL_JOURNEY_STATE } from '../models/initial.models';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';

export const journeyReducer = (state = INITIAL_JOURNEY_STATE, action: Journey.JourneyActionsUnion) => {
  switch (action.type) {
    case Journey.JourneyActions.INCREMENT_COUNT:
      return tassign(state, {
        count: state.count + 1
      });

    case Journey.JourneyActions.DECREMENT_COUNT:
      return tassign(state, {
        count: state.count - 1
      });

    case Journey.JourneyActions.SET_PCW:
      return tassign(state, {
        pcw: action.payload.pcw
      });

    case Journey.JourneyActions.RESET_JOURNEY:
      return INITIAL_JOURNEY_STATE;

    case ROUTER_NAVIGATED:
      return tassign(state, {
        ...state,
        router: action.payload.routerState
      });

    default:
      return state;
  }
};
