import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouteAComponent } from './route-a.component';
import { StoreModule, Store } from '@ngrx/store';
import { reducers } from 'src/app/store/store.reducer';
import { AppState } from 'src/app/store/store.models';
import * as JourneyActions from 'src/app/store/journey/journey.actions';

describe('RouteAComponent', () => {
  let component: RouteAComponent;
  let fixture: ComponentFixture<RouteAComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers)
      ],
      declarations: [
        RouteAComponent
      ],
      providers: [],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteAComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture.detectChanges();
  });

  it('should create the component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should dispatch action: IncrementCount on increment() called', () => {
    const action = new JourneyActions.IncrementCount();
    component.increment();
    expect(store.dispatch).toHaveBeenCalledWith(action);

    component.count$.subscribe(data => {
      expect(data).toEqual(1);
    });
  });

  it('should dispatch action: DecrementCount on decrement() called', () => {
    const action = new JourneyActions.DecrementCount();
    component.decrement();
    expect(store.dispatch).toHaveBeenCalledWith(action);

    component.count$.subscribe(data => {
      expect(data).toEqual(-1);
    });
  });


  it('should dispatch action: SetPcw on setPcw() called', () => {
    const action = new JourneyActions.SetPcw({ pcw: 'gocompare' });
    component.setPcw();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
