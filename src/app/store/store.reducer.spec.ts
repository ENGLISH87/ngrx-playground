import { logger, clearState, CLEAR_STATE, sessionMetaReducer } from './store.reducer';
import { AppState, INITIAL_APP_STATE } from './store.models';
import { Action, INIT } from '@ngrx/store';

describe('Store Reducers:', () => {

  const mockReducer = (state: AppState, _action: Action) => {
    return state;
};

  describe('logger', () => {

    it('should console log before and after state before each action', () => {
      spyOn(console, 'log');
      const actionReducer = logger(mockReducer);
      const result = actionReducer(INITIAL_APP_STATE, {} as any);
      expect(console.log).toHaveBeenCalledTimes(3);
      expect(result).toEqual(INITIAL_APP_STATE);
    });

  });

  describe('clearState', () => {

    it('should clear state on action type CLEAR_STATE', () => {
      const actionReducer = clearState(mockReducer);
      const result = actionReducer(INITIAL_APP_STATE, { type: CLEAR_STATE } as Action);
      expect(result).toEqual(undefined);
    });

    it('should not clear state on any other action', () => {
      const actionReducer = clearState(mockReducer);
      const result = actionReducer(INITIAL_APP_STATE, { type: 'TEST_ACTION' } as Action);
      expect(result).toEqual(INITIAL_APP_STATE);
    });

  });

  describe('sessionMetaReducer', () => {

    const state = INITIAL_APP_STATE;
    const sessionState: AppState = {
      ...INITIAL_APP_STATE,
      quoteState: {
        ...INITIAL_APP_STATE.quoteState,
        lastUpated: 'storage_state'
      }
    };
    const validSessionState = JSON.stringify(sessionState);
    const errSessionState = 'error_state';

    it('should retrieve state from session storage on @ngrx/store/init', () => {
      spyOn(sessionStorage, 'getItem').and.returnValue(validSessionState);
      spyOn(sessionStorage, 'setItem');
      const actionReducer = sessionMetaReducer(mockReducer);
      const result = actionReducer(undefined, { type: INIT } as Action);

      expect(result).toEqual(sessionState);
      expect(sessionStorage.getItem).toHaveBeenCalled();
      expect(sessionStorage.setItem).not.toHaveBeenCalled();
    });

    it('should handle error if deserialize state throws error', () => {
      spyOn(sessionStorage, 'getItem').and.returnValue(errSessionState);
      spyOn(sessionStorage, 'setItem');
      const actionReducer = sessionMetaReducer(mockReducer);
      const result = actionReducer(state, { type: INIT } as Action);

      expect(result).toEqual(state);
      expect(sessionStorage.getItem).toHaveBeenCalled();
      expect(sessionStorage.setItem).not.toHaveBeenCalled();
    });

    it('should save state in session storage after each action', () => {
      spyOn(sessionStorage, 'getItem').and.returnValue(errSessionState);
      spyOn(sessionStorage, 'setItem');
      const actionReducer = sessionMetaReducer(mockReducer);
      const result = actionReducer(state, { type: 'OTHER_ACTION' } as Action);

      expect(result).toEqual(state);
      expect(sessionStorage.getItem).toHaveBeenCalled();
      expect(sessionStorage.setItem).toHaveBeenCalled();
    });

  });

});
