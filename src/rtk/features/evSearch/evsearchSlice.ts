import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import i18next from 'i18next';

export interface EvSearchResult {
  name: string;
  sortParameter: string;
  sortValue: string;
  infoUri: string;
}

export interface EvSearch {
  name: string;
}

export interface SliceState {
  loading: boolean;
  evList: EvSearchResult[];
  error: string | undefined;
}

const initialState: SliceState = {
  loading: true,
  evList: [],
  error: '',
};

export const fetchEvs = createAsyncThunk('evsearch/fetchEvs', async (evsearchparam: EvSearch) => {
  return await axios
    .post('https://evdbapi.azurewebsites.net/api/Ev', evsearchparam, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error('error', error);
    });
});

const evsearchSlice = createSlice({
  name: 'evsearch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvs.fulfilled, (state, action) => {
        const responseList: EvSearchResult[] = action.payload;
        state.evList = responseList;
        state.loading = false;
      })
      .addCase(fetchEvs.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default evsearchSlice.reducer;
