
import { Action } from '@ngrx/store';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';

export class RouterNavigated implements Action {
  readonly type = ROUTER_NAVIGATED;
}

export type RouterActionsUnion = RouterNavigated;
