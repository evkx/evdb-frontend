import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface EvSearchResult {
  evs: Ev[];
}

export interface Ev {
  name: string;
  sortParameter: string;
  sortValue: string;
  infoUri: string;
  maxPowerKw: number;
  topSpeedKph: number;
  zeroTo100: number;
  netBattery: number;
  wltpConsumption: number;
  wltpRange: number;
}

export interface EvSearch {
  name: string;
  sortOrder: number;
  evType: string[];
  brands: string[];
  seatConfiguration: string[];
  seatMassageFirstRow: boolean;
  seatVentilationFirstRow: boolean;
  seatMassageSecondRow: boolean;
  seatVentilationSecondRow: boolean;
  allWheelDrive: boolean;
  nightVision: boolean;
  adaptiveSuspension: boolean;
  airSuspension: boolean;
  instrumentCluster: boolean;
  headUpDisplay: boolean;
  androidAuto: boolean;
  appleCarPlay: boolean;
  colors: string[];
}

export interface EvSearchOptions {
  brands: string[];
  seatConfig: string[];
  bodyTypes: string[];
  seatConfiguration: string[];
  colors: string[];
}

export interface SliceState {
  loading: boolean;
  brandloading: boolean;
  evList: EvSearchResult;
  search: EvSearch;
  searchOptions: EvSearchOptions;
  error: string | undefined;
}

const initialState: SliceState = {
  loading: true,
  brandloading: true,
  evList: {
    evs: [],
  },
  search: {
    name: '',
    sortOrder: 1,
    evType: [],
    brands: [],
    seatConfiguration: [],
    seatMassageFirstRow: false,
    seatMassageSecondRow: false,
    seatVentilationFirstRow: false,
    seatVentilationSecondRow: false,
    allWheelDrive: false,
    nightVision: false,
    adaptiveSuspension: false,
    airSuspension: false,
    instrumentCluster: false,
    headUpDisplay: false,
    androidAuto: false,
    appleCarPlay: false,
    colors: [],
  },
  searchOptions: {
    brands: ['Audi'],
    seatConfig: [],
    bodyTypes: ['Sedan'],
    seatConfiguration: ['5 seat'],
    colors: ['Red'],
  },
  error: '',
};

export const fetchEvs = createAsyncThunk('evsearch/fetchEvs', async (evsearchparam: EvSearch) => {
  const currentUri = window.location.href;
  let uri = 'https://api.evkx.net/api/Ev';
  if (currentUri.startsWith('http://localhost')) {
    uri = 'https://localhost:7033/api/Ev';
  }
  return await axios
    .post(uri, evsearchparam, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error('error', error);
    });
});

export const fetchSearchOptions = createAsyncThunk('evsearch/fetchSearchOptions', async () => {
  const currentUri = window.location.href;
  let uri = 'https://api.evkx.net/api/searchoptions';
  if (currentUri.startsWith('http://localhost')) {
    uri = 'https://localhost:7033/api/searchoptions';
  }
  return await axios
    .get(uri)
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
    updateBrands: (state: SliceState, action) => {
      const brands = action.payload;
      state.search.brands = brands;
    },
    updateSeatConfig: (state: SliceState, action) => {
      const seatConfig = action.payload;
      state.search.seatConfiguration = seatConfig;
    },
    updateAllWheelDrive: (state: SliceState, action) => {
      const allWheelDrive = action.payload;
      state.search.allWheelDrive = allWheelDrive;
    },
    updateNightVision: (state: SliceState, action) => {
      const checked = action.payload;
      state.search.nightVision = checked;
    },
    updateAdaptiveDamping: (state: SliceState, action) => {
      const checked = action.payload;
      state.search.adaptiveSuspension = checked;
    },
    updateAdaptiveAirSuspension: (state: SliceState, action) => {
      const checked = action.payload;
      state.search.airSuspension = checked;
    },
    updateInstrumentCluster: (state: SliceState, action) => {
      const checked = action.payload;
      state.search.instrumentCluster = checked;
    },
    updateHeadUpDisplay: (state: SliceState, action) => {
      const checked = action.payload;
      state.search.headUpDisplay = checked;
    },
    updateAndroidAuto: (state: SliceState, action) => {
      const checked = action.payload;
      state.search.androidAuto = checked;
    },
    updateAppleCarPlay: (state: SliceState, action) => {
      const checked = action.payload;
      state.search.appleCarPlay = checked;
    },
    updateColors: (state: SliceState, action) => {
      const selections = action.payload;
      state.search.colors = selections;
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
      })
      .addCase(fetchSearchOptions.fulfilled, (state, action) => {
        const responseList: EvSearchOptions = action.payload;
        state.searchOptions = responseList;
        state.brandloading = false;
      })
      .addCase(fetchSearchOptions.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default evsearchSlice.reducer;
export const {
  updateSortOrder,
  updateEvType,
  updateBrands,
  updateSeatConfig,
  updateAllWheelDrive,
  updateNightVision,
  updateAdaptiveDamping,
  updateAdaptiveAirSuspension,
  updateInstrumentCluster,
  updateHeadUpDisplay,
  updateAndroidAuto,
  updateAppleCarPlay,
  updateColors,
} = evsearchSlice.actions;
