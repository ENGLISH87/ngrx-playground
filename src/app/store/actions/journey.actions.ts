import { Action } from '@ngrx/store';

export enum JourneyActions {
  INCREMENT_COUNT = 'INCREMENT_COUNT',
  DECREMENT_COUNT = 'DECREMENT_COUNT',
  SET_PCW = 'SET_PCW',
  RESET_JOURNEY = 'RESET_JOURNEY',
}

export class IncrementCount implements Action {
  readonly type = JourneyActions.INCREMENT_COUNT;
}

export class DecrementCount implements Action {
  readonly type = JourneyActions.DECREMENT_COUNT;
}

export class SetPcw implements Action {
  readonly type = JourneyActions.SET_PCW;
  constructor(public payload: { pcw: string }) {}
}

export class ResetJourney implements Action {
  readonly type = JourneyActions.RESET_JOURNEY;
}

export type JourneyActionsUnion = IncrementCount | DecrementCount | SetPcw | ResetJourney;
