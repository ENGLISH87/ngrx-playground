import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { PersonDetails } from 'src/app/state/quote/quote.models';

@Component({
  selector: 'app-dumb-component',
  templateUrl: './dumb.component.html',
  styleUrls: ['./dumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DumbComponent {

  @Input() details: PersonDetails;

  constructor() {
  }
}
