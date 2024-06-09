import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import fetchAllReducer from '../slices/fetchAllSlice';
import setActiveReducer from '../slices/setActiveSlice';

export const store = configureStore({
  reducer: {
    allPhotos: fetchAllReducer,
    setActive: setActiveReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
