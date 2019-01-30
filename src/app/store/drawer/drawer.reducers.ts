import * as Drawer from './drawer.actions';
import { INITIAL_DRAWER_STATE } from './drawer.models';
import { tassign } from 'tassign';

export const drawerReducer = (state = INITIAL_DRAWER_STATE, action: Drawer.DrawerActionsUnion) => {
  switch (action.type) {
    case Drawer.DrawerActionTypes.OPEN_DRAWER:
      return tassign(INITIAL_DRAWER_STATE, {
        ...INITIAL_DRAWER_STATE
      });

    case Drawer.DrawerActionTypes.CLOSE_DRAWER:
      return tassign(INITIAL_DRAWER_STATE, {
        ...INITIAL_DRAWER_STATE
      });

    default:
      return state;
  }
};
