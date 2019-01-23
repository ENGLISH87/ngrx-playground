import { Component } from '@angular/core';
import { PersonDetails, AppState } from 'src/app/store/models/store.models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectQuoteDetails } from 'src/app/store/models/store.selectors';

@Component({
  selector: 'app-smart-component',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss'],
})
export class SmartComponent {

  details$: Observable<PersonDetails>;

  constructor(private _store: Store<AppState>) {
    this.details$ = this._store.select(selectQuoteDetails);
  }
}
