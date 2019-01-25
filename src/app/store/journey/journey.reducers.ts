import * as Journey from './journey.actions';
import { tassign } from 'tassign';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { INITIAL_JOURNEY_STATE } from './journey.models';

export const journeyReducer = (state = INITIAL_JOURNEY_STATE, action: Journey.JourneyActionsUnion) => {
  switch (action.type) {
    case Journey.JourneyActionTypes.INCREMENT_COUNT:
      return tassign(state, {
        count: state.count + 1
      });

    case Journey.JourneyActionTypes.DECREMENT_COUNT:
      return tassign(state, {
        count: state.count - 1
      });

    case Journey.JourneyActionTypes.SET_PCW:
      return tassign(state, {
        pcw: action.payload.pcw
      });

    case Journey.JourneyActionTypes.RESET_JOURNEY:
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
