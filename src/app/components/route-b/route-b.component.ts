import * as Quote from '../../store/actions/quote.actions';
import * as Selectors from '../../store/models/store.selectors';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, PersonDetails } from '../../store/models/store.models';
import { SerializedRouterStateSnapshot } from '@ngrx/router-store';

@Component({
  selector: 'app-route-b',
  templateUrl: './route-b.component.html',
  styleUrls: ['./route-b.component.scss']
})
export class RouteBComponent {
  routerState$: Observable<SerializedRouterStateSnapshot>;

  constructor(
    private _store: Store<AppState>
  ) {
    this.routerState$ = this._store.select(store => store.journey.router);
  }
}
