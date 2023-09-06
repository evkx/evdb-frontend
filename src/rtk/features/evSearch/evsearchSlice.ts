import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface EvSearchResult {
  evs: Ev[];
  count: number;
}

export interface Ev {
  evId: string;
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
  thumbUri: string;
  maxDcChargingSpeed: number;
  averageDcChargingSpeed: number;
}

export interface EvSearch {
  name: string;
  sortOrder: string;
  evType: string[];
  brands: string[];
  seatConfiguration: string[];
  seatMassageFirstRow: boolean;
  seatVentilationFirstRow: boolean;
  seatMassageSecondRow: boolean;
  seatVentilationSecondRow: boolean;
  allWheelDrive: boolean;
  fWD: boolean;
  rWD: boolean;
  nightVision: boolean;
  adaptiveSuspension: boolean;
  airSuspension: boolean;
  rearAxleSteering: boolean;
  instrumentCluster: boolean;
  headUpDisplay: boolean;
  androidAuto: boolean;
  appleCarPlay: boolean;
  colors: string[];
  adaptiveCruiseControl: boolean;
  autoSteer: boolean;
  automaticParking: boolean;
  blindSpotMonitoring: boolean;
  automatedLaneChange: boolean;
  driverDrowsinessDetection: boolean;
  driverMonitoringSystem: boolean;
  rearCrossTrafficAlert: boolean;
  exitWarning: boolean;
  trafficSignRecognition: boolean;
  efficiencyAssist: boolean;
  lfpChemistry: boolean;
  batteryHeatingNavigation: boolean;
  batteryHeatingManual: boolean;
  firstRowSeatsHeating: boolean;
  firstRowSeatsVentilation: boolean;
  firstRowSeatsMassage: boolean;
  firstRowAdjustableThighSupport: boolean;
  secondRowSeatsHeating: boolean;
  secondRowSeatsVentilation: boolean;
  secondRowSeatsMassage: boolean;
  secondRowRecline: boolean;
  secondRowExecutiveSeat: boolean;
  chargePortFront: boolean;
  chargePortFrontLeft: boolean;
  chargePortFrontRight: boolean;
  chargePortRearLeft: boolean;
  chargePortRearRight: boolean;
  liftOfRegen: boolean;
  liftOfRegenWithHoldMode: boolean;
  blendedBrakes: boolean;
  adaptiveRegen: boolean;
 liftOfRegenLevels: boolean;
 coasting: boolean;
 includeDiscontinued: boolean;
 minimumWltpRange: string;
 minimumHp: string; 
 minimumTrailerWeight: string;
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
  compareList: string[];
}

const initialState: SliceState = {
  loading: true,
  brandloading: true,
  evList: {
    evs: [],
    count: 0,
  },
  search: {
    name: '',
    sortOrder: 'Name',
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
    fWD: false,
    rWD: false,
    rearAxleSteering: false,
    adaptiveCruiseControl: false,
    autoSteer: false,
    automaticParking: false,
    blindSpotMonitoring: false,
    automatedLaneChange: false,
    driverDrowsinessDetection: false,
    driverMonitoringSystem: false,
    rearCrossTrafficAlert: false,
    exitWarning: false,
    trafficSignRecognition: false,
    efficiencyAssist: false,
    lfpChemistry: false,
    batteryHeatingNavigation: false,
    batteryHeatingManual: false,
    firstRowSeatsHeating: false,
    firstRowSeatsMassage: false,
    firstRowSeatsVentilation: false,
    secondRowSeatsHeating: false,
    secondRowSeatsMassage: false,
    secondRowSeatsVentilation: false,
    firstRowAdjustableThighSupport: false,
    secondRowRecline: false,
    secondRowExecutiveSeat: false,
    chargePortFront: false,
    chargePortFrontLeft: false,
    chargePortFrontRight: false,
    chargePortRearLeft: false,
    chargePortRearRight: false,
    liftOfRegen: false,
    liftOfRegenWithHoldMode: false,
    blendedBrakes: false,
    adaptiveRegen: false,
    liftOfRegenLevels: false,
    coasting: false,
    includeDiscontinued: false,
    minimumHp: '',
    minimumTrailerWeight: '',
    minimumWltpRange: '',
  },
  searchOptions: {
    brands: [
      'Audi',
      'BMW',
      'BYD',
      'CUPRA',
      'Hongqi',
      'Hyundai',
      'Kia',
      'Lucid',
      'Mercedes',
      'Nio',
      'Nissan',
      'Porsche',
      'SKODA',
      'Tesla',
      'Toyota',
      'Volkswagen',
    ],
    seatConfig: [],
    bodyTypes: ['Sedan'],
    seatConfiguration: ['5 seat'],
    colors: ['Red'],
  },
  error: '',
  compareList: [],
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
      state.search.sortOrder = action.payload;
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
    updateRWD: (state: SliceState, action) => {
      state.search.rWD = action.payload;
    },
    updateFWD: (state: SliceState, action) => {
      state.search.fWD = action.payload;
    },
    updateRearAxleSteering: (state: SliceState, action) => {
      state.search.rearAxleSteering = action.payload;
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
      state.search.airSuspension = action.payload;
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
    updateAdaptiveCruiseControl: (state: SliceState, action) => {
      state.search.adaptiveCruiseControl = action.payload;
    },
    updateAutoSteer: (state: SliceState, action) => {
      state.search.autoSteer = action.payload;
    },
    updateLfpChemistry: (state: SliceState, action) => {
      state.search.lfpChemistry = action.payload;
    },
    updateBatteryHeatingNavigation: (state: SliceState, action) => {
      state.search.batteryHeatingNavigation = action.payload;
    },
    updateBatteryHeatingManual: (state: SliceState, action) => {
      state.search.batteryHeatingManual = action.payload;
    },
    updateFirstRowSeatsHeating: (state: SliceState, action) => {
      state.search.firstRowSeatsHeating = action.payload;
    },
    updateFirstRowSeatsVentilation: (state: SliceState, action) => {
      state.search.firstRowSeatsVentilation = action.payload;
    },
    updateFirstRowSeatsMassage: (state: SliceState, action) => {
      state.search.firstRowSeatsMassage = action.payload;
    },
    updateFirstRowAdjustableThighSupport: (state: SliceState, action) => {
      state.search.firstRowAdjustableThighSupport = action.payload;
    },
    updateSecondRowSeatsHeating: (state: SliceState, action) => {
      state.search.secondRowSeatsHeating = action.payload;
    },
    updateSecondRowSeatsVentilation: (state: SliceState, action) => {
      state.search.secondRowSeatsVentilation = action.payload;
    },
    updateSecondRowSeatsMassage: (state: SliceState, action) => {
      state.search.secondRowSeatsMassage = action.payload;
    },
    updateSecondRowRecline: (state: SliceState, action) => {
      state.search.secondRowRecline = action.payload;
    },
    updateSecondRowExecutiveSeat: (state: SliceState, action) => {
      state.search.secondRowExecutiveSeat = action.payload;
    },
    updateChargePortFront: (state: SliceState, action) => {
      state.search.chargePortFront = action.payload;
    },
    updateChargePortFrontLeft: (state: SliceState, action) => {
      state.search.chargePortFrontLeft = action.payload;
    },
    updateChargePortFrontRight: (state: SliceState, action) => {
      state.search.chargePortFrontRight = action.payload;
    },
    updateChargePortRearLeft: (state: SliceState, action) => {
      state.search.chargePortRearLeft = action.payload;
    },
    updateChargePortRearRight: (state: SliceState, action) => {
      state.search.chargePortRearRight = action.payload;
    },
    updateLiftOfRegen: (state: SliceState, action) => {
      state.search.liftOfRegen = action.payload;
    },
    updateLiftOfRegenWithHoldMode: (state: SliceState, action) => {
      state.search.liftOfRegenWithHoldMode = action.payload;
    },
    updateBlendedBrakes: (state: SliceState, action) => {
      state.search.blendedBrakes = action.payload;
    },
    updateAdaptiveRegen: (state: SliceState, action) => {
      state.search.adaptiveRegen = action.payload;
    },
    updateLiftOfRegenLevels: (state: SliceState, action) => {
      state.search.liftOfRegenLevels = action.payload;
    },
    updateCoasting: (state: SliceState, action) => {
      state.search.coasting = action.payload;
    },
    updateColors: (state: SliceState, action) => {
      const selections = action.payload;
      state.search.colors = selections;
    },
    updateSortOrderFromParam: (state: SliceState, action) => {
      state.search.sortOrder = action.payload;
    },
    updateCompareList:  (state: SliceState, action) => {
      const selections = action.payload;
      state.compareList = selections;
    },
    updateMinimumHp: (state: SliceState, action) => {
      state.search.minimumHp = action.payload;
    },
    updateMinimumWltpRange: (state: SliceState, action) => {
      state.search.minimumWltpRange = action.payload;
    },
    updateMinumTrailerWeight: (state: SliceState, action) => {
      state.search.minimumTrailerWeight = action.payload;
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
  updateFWD,
  updateRWD,
  updateRearAxleSteering,
  updateSortOrderFromParam,
  updateAdaptiveCruiseControl,
  updateAutoSteer,
  updateBatteryHeatingManual,
  updateBatteryHeatingNavigation,
  updateLfpChemistry,
  updateFirstRowSeatsHeating,
  updateFirstRowSeatsMassage,
  updateFirstRowSeatsVentilation,
  updateSecondRowSeatsHeating,
  updateSecondRowSeatsVentilation,
  updateSecondRowSeatsMassage,
  updateFirstRowAdjustableThighSupport,
  updateSecondRowExecutiveSeat,
  updateSecondRowRecline,
  updateChargePortFront,
  updateChargePortFrontLeft,
  updateChargePortFrontRight,
  updateChargePortRearLeft,
  updateChargePortRearRight,
  updateLiftOfRegen,
  updateLiftOfRegenWithHoldMode,
  updateBlendedBrakes,
  updateAdaptiveRegen,
  updateLiftOfRegenLevels,
  updateCoasting,
  updateCompareList,
  updateMinimumHp,
  updateMinimumWltpRange,
  updateMinumTrailerWeight,
} = evsearchSlice.actions;
