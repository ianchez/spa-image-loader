import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface SetActiveState {
  ID: string | undefined;
}

const initialState: SetActiveState = {
  ID: undefined,
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
    }
  },
});

export const { clear, setActiveID } = setActiveSlice.actions;

export const selectActiveID = (state: RootState) => state.setActive.ID;

export default setActiveSlice.reducer;
