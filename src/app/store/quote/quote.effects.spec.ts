import { TestBed } from '@angular/core/testing';
import { QuoteEffects } from './quote.effects';
import { QuoteService } from 'src/app/services/quote.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { of, Observable, throwError, EMPTY } from 'rxjs';
import { FectchQuoteSuccess, FectchQuote, FectchQuoteError, SaveQuote, SaveQuoteSuccess, SaveQuoteError } from './quote.actions';
import { INITIAL_QUOTE_STATE } from './quote.models';
import { hot, cold } from 'jasmine-marbles';
import { provideMockActions } from '@ngrx/effects/testing';
import { EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';

describe('Quote Effects',  () => {
  let effects: QuoteEffects;
  let metadata: EffectsMetadata<QuoteEffects>;
  let routerSvc: Router;
  let quoteSvc: QuoteService;
  let actions: Observable<any>;
  const errMsg = 'An error occuured';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        QuoteEffects,
        provideMockActions(() => actions),
        QuoteService,
      ],
    });

    effects = TestBed.get(QuoteEffects);
    metadata = getEffectsMetadata(effects);
    routerSvc = TestBed.get(Router);
    quoteSvc = TestBed.get(QuoteService);

    jasmine.clock().mockDate(new Date(2019, 1, 1));
  });

  describe('loadQuote$', () => {

    it ('should return FectchQuoteSuccess with new quote, on success', () => {
      spyOn(quoteSvc, 'getQuote').and.returnValue(of(INITIAL_QUOTE_STATE.quote));
      const action = new FectchQuote();
      const completion = new FectchQuoteSuccess(INITIAL_QUOTE_STATE.quote);

      actions = hot('-a-', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.loadQuote$).toBeObservable(expected);
      expect(quoteSvc.getQuote).toHaveBeenCalled();
    });

    it('should return FectchQuoteError with error msg, on service error', () => {
      spyOn(quoteSvc, 'getQuote').and.returnValue(throwError(errMsg));
      const action = new FectchQuote();
      const completion = new FectchQuoteError({ error: errMsg });

      actions = hot('--a-', { a: action});
      const expected = cold('--b', { b: completion });

      expect(effects.loadQuote$).toBeObservable(expected);
      expect(quoteSvc.getQuote).toHaveBeenCalled();
    });

    it('should register loadQuote$ that dispatches an action', () => {
      expect(metadata.loadQuote$).toEqual({ dispatch: true });
    });

  });


  describe('interstitialSuccessRedirect$', () => {

    it('should navigate to /route-a on FectchQuoteSuccess', () => {
      spyOn(routerSvc, 'navigateByUrl');
      const action = new FectchQuoteSuccess(INITIAL_QUOTE_STATE.quote);
      actions = hot('-a', { a: action });

      effects.interstitialSuccessRedirect$.subscribe(() => {
        expect(routerSvc.navigateByUrl).toHaveBeenCalledWith('/route-a');
      });
    });

    it('should not navigate on FectchQuoteSuccess if default root', () => {
      spyOn(routerSvc, 'navigateByUrl');
      spyOnProperty(routerSvc, 'url').and.returnValue('/test');
      const action = new FectchQuoteSuccess(INITIAL_QUOTE_STATE.quote);
      actions = hot('-a', { a: action });

      effects.interstitialSuccessRedirect$.subscribe(() => {
        expect(routerSvc.navigateByUrl).not.toHaveBeenCalled();
      });
    });

    it('should register interstitialSuccessRedirect$ that dispatches an action', () => {
      expect(metadata.interstitialSuccessRedirect$).toEqual({ dispatch: false });
    });

  });


  describe('interstitialErrorRedirect$', () => {

    it('should navigate to /error on FectchQuoteError', () => {
      spyOn(routerSvc, 'navigateByUrl');
      const action = new FectchQuoteError({ error: errMsg });
      actions = hot('-a', { a: action });

      effects.interstitialErrorRedirect$.subscribe(() => {
        expect(routerSvc.navigateByUrl).toHaveBeenCalledWith('/error');
      });
    });

    it('should not navigate to /error on FectchQuoteError if default root', () => {
      spyOn(routerSvc, 'navigateByUrl');
      spyOnProperty(routerSvc, 'url').and.returnValue('/test');
      const action = new FectchQuoteError({ error: errMsg });
      actions = hot('-a', { a: action });

      effects.interstitialErrorRedirect$.subscribe(() => {
        expect(routerSvc.navigateByUrl).not.toHaveBeenCalled();
      });
    });

    it('should register interstitialErrorRedirect$ that dispatches an action', () => {
      expect(metadata.interstitialErrorRedirect$).toEqual({ dispatch: false });
    });

  });


  describe('saveQuote$', () => {

    it('should return SaveQuoteSuccess with new quote, on success', () => {
      spyOn(quoteSvc, 'saveQuote').and.returnValue(of(INITIAL_QUOTE_STATE.quote));
      const action = new SaveQuote();
      const completion = new SaveQuoteSuccess(INITIAL_QUOTE_STATE.quote);

      actions = hot('-a-', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.saveQuote$).toBeObservable(expected);
      expect(quoteSvc.saveQuote).toHaveBeenCalled();
    });

    it('should return SaveQuoteError with error msg, on service error', () => {
      spyOn(quoteSvc, 'saveQuote').and.returnValue(throwError(errMsg));
      const action = new SaveQuote();
      const completion = new SaveQuoteError({ error: errMsg });

      actions = hot('--a-', { a: action});
      const expected = cold('--b', { b: completion });

      expect(effects.saveQuote$).toBeObservable(expected);
      expect(quoteSvc.saveQuote).toHaveBeenCalled();
    });

    it('should register saveQuote$ that dispatches an action', () => {
      expect(metadata.saveQuote$).toEqual({ dispatch: true });
    });

  });


  describe('saveQuoteError$', () => {

    it('should navigate to /error on SaveQuoteError', () => {
      spyOn(routerSvc, 'navigateByUrl');
      const action = new SaveQuoteError({ error: errMsg });
      actions = hot('-a', { a: action });

      effects.saveQuoteError$.subscribe(() => {
        expect(routerSvc.navigateByUrl).toHaveBeenCalledWith('/error');
      });
    });

    it('should register saveQuoteError$ that dispatches an action', () => {
      expect(metadata.saveQuoteError$).toEqual({ dispatch: false });
    });

  });

});
