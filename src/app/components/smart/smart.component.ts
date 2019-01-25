import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectQuoteDetails } from 'src/app/state/quote/quote.selectors';
import { PersonDetails } from 'src/app/state/quote/quote.models';
import { AppState } from 'src/app/state/state.models';

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
