import { tassign } from 'tassign';
import { AppState } from '../models/store.models';
import { environment } from 'src/environments/environment';
import { quoteReducer } from './quote.reducer';
import { journeyReducer } from './journey.reducer';
import { ActionReducerMap, MetaReducer, ActionReducer, Action, INIT } from '@ngrx/store';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

export const CLEAR_STATE = 'CLEAR_STATE';

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<AppState> = {
  journey: journeyReducer,
  quote: quoteReducer
};

/**
 * console.log all actions
 */
export const logger = (reducer: ActionReducer<AppState>): ActionReducer<AppState> => {
  return (state: AppState, action: Action): AppState => {

    const nextState = reducer(state, action);
    console.group(action.type);
    console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, state);
    console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
    console.log(`%c next state`, `color: #4CAF50; font-weight: bold`, nextState);
    console.groupEnd();
    return nextState;

  };
};

/**
 * Clear state if action == CLEAR_STATE
 */
export const clearState = (reducer: ActionReducer<AppState>): ActionReducer<AppState> => {
  return (state: AppState, action: Action): AppState => {
    return reducer(action.type === CLEAR_STATE ? undefined : state, action);
  };
};

/***
 * Session Storage meta-reducer. Get state from storage in INIT, deserialize and pass restored state to next reducer.
 * If action != INIT then save state into session storage
 */
export const sessionMetaReducer = (reducer: ActionReducer<AppState>): ActionReducer<AppState> => {
  return (state: AppState, action: Action): AppState => {
    try {
      const serializedState = sessionStorage.getItem('state');

      if (action.type === INIT  && serializedState) {

        // load session storage and continue with updated state
        const deserialized = JSON.parse(serializedState);
        const newState = tassign(state, {
          ...deserialized
        });
        return reducer(newState, action);

      } else {

        // save session storage and return next state
        const nextState = reducer(state, action);
        const nextSateSerialized = JSON.stringify(nextState);
        sessionStorage.setItem('state', nextSateSerialized);

        return nextState;
      }

    } catch (err) {
      return reducer(state, action);
    }
  };
};

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger, storeFreeze, clearState, sessionMetaReducer]
  : [clearState, sessionMetaReducer];
