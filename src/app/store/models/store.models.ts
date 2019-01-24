import { RouterStateSnapshot } from '@angular/router';
import { SerializedRouterStateSnapshot } from '@ngrx/router-store';

export interface AppState {
  journey: JourneyState;
  quote: QuoteState;
}

export interface JourneyState {
  currentPage: string;
  pcw: string;
  count: number;
  router: SerializedRouterStateSnapshot;
}

export interface QuoteState {
  receivedAt: string;
  isFetching: boolean;
  quote: Quote;
  error?: string;
}

export interface Quote {
  id: number;
  firstName: string;
  lastName: string;
  details: PersonDetails;
}

export interface PersonDetails {
  age: number;
  occupation: string;
  address: string;
}
