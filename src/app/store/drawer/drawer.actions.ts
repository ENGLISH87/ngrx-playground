import { Action } from '@ngrx/store';

export enum DrawerActionTypes {
  OPEN_DRAWER = '[DRAWER] OPEN_DRAWER',
  CLOSE_DRAWER = '[DRAWER] CLOSE_DRAWER',
}

export class OpenDrawer implements Action {
  readonly type = DrawerActionTypes.OPEN_DRAWER;
}

export class CloseDrawer implements Action {
  readonly type = DrawerActionTypes.CLOSE_DRAWER;
}

export type DrawerActionsUnion = OpenDrawer | CloseDrawer;
