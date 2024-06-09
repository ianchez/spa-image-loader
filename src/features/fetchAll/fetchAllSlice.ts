import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { PhotoItem } from '../../types';
import apiService from '../../services/ApiService';
import { parsePhotoItem } from '../../utils';

enum FetchAllStatusEnum {
  data = 'data',
  loading = 'loading',
  errors = 'errors',
};

export interface FethAllState {
  value: PhotoItem[];
  status: FetchAllStatusEnum;
}

const initialState: FethAllState = {
  value: [],
  status: FetchAllStatusEnum.data,
};

export const fetchAllPhotosAsync = createAsyncThunk(
  'FETCH_ALL/PHOTOS',
  async () => {
    const data = await apiService.getData();
    const dataArray = Object.values(data).map(parsePhotoItem);
    const sortedData = dataArray.sort((a, b) => a.index - b.index);
    return sortedData;
  }
);

export const fetchAllSlice = createSlice({
  name: 'FETCH_ALL',
  initialState,
  reducers: {
    clear: (state) => {
      state.value = initialState.value;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPhotosAsync.pending, (state) => {
        state.status = FetchAllStatusEnum.loading;
      })
      .addCase(fetchAllPhotosAsync.fulfilled, (state, action) => {
        state.status = FetchAllStatusEnum.data;
        state.value = action.payload;
      })
      .addCase(fetchAllPhotosAsync.rejected, (state) => {
        state.status = FetchAllStatusEnum.errors;
      });
  },
});

export const { clear } = fetchAllSlice.actions;

export const selectAllPhotos = (state: RootState) => state.allPhotos.value;

export default fetchAllSlice.reducer;
