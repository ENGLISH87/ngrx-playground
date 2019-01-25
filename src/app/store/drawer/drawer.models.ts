
export const INITIAL_DRAWER_STATE: DrawerState = {
  isOpen: false,
  isAnimating: false,
  drawers: []
};

export interface DrawerState {
  isOpen: boolean;
  isAnimating: boolean;
  drawers: [];
}

