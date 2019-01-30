
export const INITIAL_QUOTE_STATE: QuoteState = {
  isFetching: false,
  isSaving: false,
  lastUpated: null,
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

export interface QuoteState {
  lastUpated: string;
  isFetching: boolean;
  isSaving: boolean;
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
