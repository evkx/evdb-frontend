import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import i18next from 'i18next';

export interface EvSearchResult {
  name: string;
  sortParameter: string;
  sortValue: string;
  infoUri: string;
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

export const fetchEvs = createAsyncThunk('delegableApi/fetchDelegableApis', async () => {
  return await axios
    .get('/accessmanagement/api/v1/1337/resources/maskinportenschema')
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
