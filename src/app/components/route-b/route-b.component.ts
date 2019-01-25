import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { SerializedRouterStateSnapshot } from '@ngrx/router-store';
import { AppState } from 'src/app/store/store.models';

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
