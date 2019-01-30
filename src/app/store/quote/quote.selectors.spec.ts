import { selectQuoteDetails, selectQuote, selectLastName } from './quote.selectors';
import { INITIAL_APP_STATE } from '../store.models';

describe('Quote Selectors', () => {

  it('should return quote', () => {
    const test = selectQuote(INITIAL_APP_STATE);
    expect(test).toBe(INITIAL_APP_STATE.quoteState);
  });

  it('should return last name', () => {
    const test = selectLastName(INITIAL_APP_STATE);
    expect(test).toBe(INITIAL_APP_STATE.quoteState.quote.lastName);
  });

  it('should return quote details obj', () => {
    const test = selectQuoteDetails.projector(INITIAL_APP_STATE.quoteState);
    expect(test)
      .toBe(INITIAL_APP_STATE.quoteState.quote.details);
  });

});
