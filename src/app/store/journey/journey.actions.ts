import { Action } from '@ngrx/store';
import { RouterNavigatedAction } from '@ngrx/router-store';

export enum JourneyActionTypes {
  INCREMENT_COUNT = 'INCREMENT_COUNT',
  DECREMENT_COUNT = 'DECREMENT_COUNT',
  SET_PCW = 'SET_PCW',
  RESET_JOURNEY = 'RESET_JOURNEY',
}

export class IncrementCount implements Action {
  readonly type = JourneyActionTypes.INCREMENT_COUNT;
}

export class DecrementCount implements Action {
  readonly type = JourneyActionTypes.DECREMENT_COUNT;
}

export class SetPcw implements Action {
  readonly type = JourneyActionTypes.SET_PCW;
  constructor(public payload: { pcw: string }) {}
}

export class ResetJourney implements Action {
  readonly type = JourneyActionTypes.RESET_JOURNEY;
}

export type JourneyActionsUnion = IncrementCount | DecrementCount | SetPcw | ResetJourney | RouterNavigatedAction;
