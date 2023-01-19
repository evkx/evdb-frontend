import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Search } from 'react-router-dom';

export interface EvSearchResult {
  evs: Ev[];
}

export interface Ev {
  name: string;
  sortParameter: string;
  sortValue: string;
  infoUri: string;
}

export interface EvSearch {
  name: string;
  sortOrder: number;
  evType: string[];
}

export interface SliceState {
  loading: boolean;
  evList: EvSearchResult;
  search: EvSearch;
  error: string | undefined;
}

const initialState: SliceState = {
  loading: true,
  evList: {
    evs: [],
  },
  search: {
    name: '',
    sortOrder: 3,
    evType: [],
  },
  error: '',
};

export const fetchEvs = createAsyncThunk('evsearch/fetchEvs', async (evsearchparam: EvSearch) => {
  return await axios
    .post('https://localhost:7033/api/Ev', evsearchparam, {
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
  reducers: {
    updateSortOrder: (state: SliceState, action) => {
      const sortOrder = action.payload.trim().toLowerCase();
      state.search.sortOrder = parseInt(sortOrder);
    },
    updateEvType: (state: SliceState, action) => {
      const evTypes = action.payload;
      state.search.evType = evTypes;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvs.fulfilled, (state, action) => {
        const responseList: EvSearchResult = action.payload;
        state.evList = responseList;
        state.loading = false;
      })
      .addCase(fetchEvs.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default evsearchSlice.reducer;
export const { updateSortOrder, updateEvType } = evsearchSlice.actions;
