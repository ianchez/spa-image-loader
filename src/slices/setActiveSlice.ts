import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface SetActiveState {
  ID: string | undefined;
  selectedPage: number;
}

const initialState: SetActiveState = {
  ID: undefined,
  selectedPage: 1,
};

export const setActiveSlice = createSlice({
  name: 'SET_ACTIVE',
  initialState,
  reducers: {
    clear: (state) => {
      state.ID = initialState.ID;
    },
    setActiveID: (state, action) => {
      state.ID = action.payload;
    },
    setSelectedPage: (state, action) => {
      state.selectedPage = action.payload;
    }
  },
});

export const { clear, setActiveID, setSelectedPage } = setActiveSlice.actions;

export const selectActive = (state: RootState) => state.setActive;

export default setActiveSlice.reducer;
