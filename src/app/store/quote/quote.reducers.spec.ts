import { quoteReducer } from './quote.reducers';
import { FectchQuoteError, FectchQuoteSuccess, FectchQuote, SaveQuote, SaveQuoteError, SaveQuoteSuccess } from './quote.actions';
import { INITIAL_QUOTE_STATE, QuoteState } from './quote.models';

describe('QuoteReducer', () => {

  describe('undefined action', () => {

    it('should return the default state', () => {
      const expected = INITIAL_QUOTE_STATE;
      const result = quoteReducer(undefined, {} as any);

      expect(result).toEqual(expected);
    });

  });

  describe('FetchQuote', () => {

    it('should set isFetching property to true and clear error property on FETCH_QUOTE', () => {
      const expected = Object.assign({}, {
        ...INITIAL_QUOTE_STATE,
        isFetching: true
      });

      const createdAction = new FectchQuote();
      const result = quoteReducer(undefined, createdAction);
      expect(result).toEqual(expected);
    });

    it('should update quote and lastUpdated date on FETCH_QUOTE_SUCCESS', () => {
      const expected = Object.assign({}, {
        ...INITIAL_QUOTE_STATE,
        lastUpated: (new Date()).toISOString(),
        error: null,
        isFetching: false
      });
      const createAction = new FectchQuoteSuccess(INITIAL_QUOTE_STATE.quote);
      expected.lastUpated = createAction.payload.lastUpated;

      const result = quoteReducer(undefined, createAction);
      expect(result).toEqual(expected);
    });

    it('should set isFetching propery to false, and assign error msg on FETCH_QUOTE_ERROR', () => {
      const errMsg = 'An error has occurred';
      const expected = Object.assign({}, {
        ...INITIAL_QUOTE_STATE,
        error: errMsg,
        quote: null
      });

      const createAction = new FectchQuoteError({ error: errMsg });
      const result = quoteReducer(undefined, createAction);

      expect(result).toEqual(expected);
    });

  });

  describe('SaveQuote', () => {

    it('should set isSaving property to true on SAVE_QUOTE', () => {
      const expected = Object.assign({}, {
        ...INITIAL_QUOTE_STATE,
        isSaving: true,
        isFetching: false,
        error: null
      });

      const createAction = new SaveQuote();
      const result = quoteReducer(undefined, createAction);
      expect(result).toEqual(expected);
    });

    it('should set isSaving property to false, and assign error msg on SAVE_QUOTE_ERROR', () => {
      const errMsg = 'An error has occurred';
      const expected = Object.assign({}, {
        ...INITIAL_QUOTE_STATE,
        isFetching: false,
        isSaving: false,
        error: errMsg,
        quote: null,
        lastUpated: null
      });

      const createAction = new SaveQuoteError({ error: errMsg });
      const result = quoteReducer(undefined, createAction);
      expect(result).toEqual(expected);
    });

    it('should update quote and lastUpdated date on SAVE_QUOTE_SUCCESS', () => {
      const expected = Object.assign({}, {
        ...INITIAL_QUOTE_STATE,
        lastUpated: (new Date()).toISOString(),
        error: null,
        isFetching: false
      });

      const createAction = new SaveQuoteSuccess(INITIAL_QUOTE_STATE.quote);
      expected.lastUpated = createAction.payload.lastUpated;

      const result = quoteReducer(undefined, createAction);
      expect(result).toEqual(expected);
    });

  });

});
