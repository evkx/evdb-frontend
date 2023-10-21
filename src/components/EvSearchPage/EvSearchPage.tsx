import { Panel, PanelVariant } from '@altinn/altinn-design-system';
import type { MultiSelectOption } from '@digdir/design-system-react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Select,
  Checkbox,
  Spinner,
  Heading,
  Ingress,
  Accordion,
  Button,
  Textfield,
  Tabs,
  Switch, 
  Alert
} from '@digdir/design-system-react';
import { LegacyTabs } from '@digdir/design-system-react';
import '@digdir/design-system-tokens/brand/digdir/tokens.css';
import type { Key } from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { FilterIcon, CarIcon, PaletteIcon, PersonGroupIcon, RobotSmileIcon, LightningIcon, FingerButtonIcon  } from '@navikt/aksel-icons';

import { Filter, type FilterOption } from '@/components/Filter';
import {
  fetchEvs,
  fetchSearchOptions,
  updateSortOrder,
  updateEvType,
  updateBrands,
  updateSeatConfig,
  updateAllWheelDrive,
  updateNightVision,
  updateAdaptiveDamping,
  updateInstrumentCluster,
  updateHeadUpDisplay,
  updateAndroidAuto,
  updateAppleCarPlay,
  updateColors,
  updateAdaptiveAirSuspension,
  updateFWD,
  updateRWD,
  updateRearAxleSteering,
  updateAdaptiveCruiseControl,
  updateAutoSteer,
  updateBatteryHeatingManual,
  updateBatteryHeatingNavigation,
  updateLfpChemistry,
  updateFirstRowSeatsHeating,
  updateFirstRowSeatsMassage,
  updateFirstRowSeatsVentilation,
  updateSecondRowSeatsHeating,
  updateSecondRowSeatsMassage,
  updateSecondRowSeatsVentilation,
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
  updateIncludeDiscontinued,
} from '@/rtk/features/evSearch/evsearchSlice';
import type { Ev, EvSearch } from '@/rtk/features/evSearch/evsearchSlice';
import { useAppDispatch, useAppSelector } from '@/rtk/app/hooks';
import { useMediaQuery } from '@/resources/hooks';

import { PageContainer } from '../Reusables/PageContainer';
import { EvSearchAccordion } from '../Reusables/EvSearchAccordion';
import { EvSearchActionBar } from '../Reusables/EvSearchActionBar';
import { Page, PageContent } from '../Page';

import classes from './EvSearchPage.module.css';

export const EvSearchPage = () => {
  const { t } = useTranslation('common');
  const loading = useAppSelector((state) => state.evsearchResult.loading);

  const dispatch = useAppDispatch();

  const fetchSearchOptionData = async () => await dispatch(fetchSearchOptions());
  const isSm = useMediaQuery('(max-width: 768px)');

  const evsearchresult = useAppSelector((state) => state.evsearchResult.evList.evs);
  const evsearchCount = useAppSelector((state) => state.evsearchResult.evList.count);
  const bodyTypesResult = useAppSelector((state) => state.evsearchResult.searchOptions.bodyTypes);
  const colorResult = useAppSelector((state) => state.evsearchResult.searchOptions.colors);
  const compareList = useAppSelector((state) => state.evsearchResult.compareList);
  const seatConfigResult = useAppSelector(
    (state) => state.evsearchResult.searchOptions.seatConfiguration,
  );
  const [open, setOpen] = useState(false);

  const brandsResult = useAppSelector((state) => state.evsearchResult.searchOptions.brands);

  const initSearch = useAppSelector((state) => state.evsearchResult.search);
  const fetchData = async (evSearch: EvSearch) => await dispatch(fetchEvs(evSearch));

  const error = useAppSelector((state) => state.evsearchResult.error);

  const location = useLocation();
  const history = useNavigate();
  const [isReady, setIsReady] = useState<boolean>(false);

    const openUrl = () => {
      const currentUri = window.location.href;
      let baseUrl = 'https://db.evkx.net/evcompare';
      if (currentUri.startsWith('http://localhost')) {
        baseUrl = 'https://localhost:7033/evcompare';
      }

      const queryParamName = "evs";
      const valuesCombined = compareList.join(','); // Join the values with ','
      const completeUrl = `${baseUrl}?${queryParamName}=${encodeURIComponent(valuesCombined)}`;
      window.open(completeUrl, '_blank');
    };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    if (queryParams.get('brands') != null && queryParams.get('brands') != "") {
        dispatch(updateBrands(queryParams.get('brands')?.split(",")));
    }

    if (queryParams.get('evType') != null && queryParams.get('evType') != "") {
      dispatch(updateEvType(queryParams.get('evType')?.split(",")));
    }

    if (queryParams.get('colors') != null && queryParams.get('colors') != "") {
      dispatch(updateColors(queryParams.get('colors')?.split(",")));
    }
    
    if (queryParams.get('seatConfiguration') != null && queryParams.get('seatConfiguration') != "") {
      dispatch(updateSeatConfig(queryParams.get('seatConfiguration')?.split(",")));
    }

    if (queryParams.get('allWheelDrive') != null && queryParams.get('allWheelDrive') === 'true') {
      dispatch(updateAllWheelDrive(true));
    }
    if (queryParams.get('rWD') != null && queryParams.get('rWD') === 'true') {
      dispatch(updateRWD(true));
    }
    if (queryParams.get('fWD') != null && queryParams.get('fWD') === 'true') {
      dispatch(updateFWD(true));
    }
    if (queryParams.get('adaptiveSuspension') != null && queryParams.get('adaptiveSuspension') === 'true') {
      dispatch(updateAdaptiveDamping(true));
    }
    if (queryParams.get('airSuspension') != null && queryParams.get('airSuspension') === 'true') {
      dispatch(updateAdaptiveAirSuspension(true));
    }
    if (queryParams.get('rearAxleSteering') != null && queryParams.get('rearAxleSteering') === 'true') {
      dispatch(updateRearAxleSteering(true));
    }


    if (queryParams.get('nightVision') != null && queryParams.get('nightVision') === 'true') {
      dispatch(updateNightVision(true));
    }

    if (queryParams.get('includediscontined') != null && queryParams.get('includediscontined') === 'true') {
      dispatch(updateIncludeDiscontinued(true));
    }
        
    if (queryParams.get('adaptiveCruiseControl') != null && queryParams.get('adaptiveCruiseControl') === 'true') {
      dispatch(updateAdaptiveCruiseControl(true));
    }
    if (queryParams.get('autoSteer') != null && queryParams.get('autoSteer') === 'true') {
      dispatch(updateAutoSteer(true));
    }

    //

    if (queryParams.get('chargePortFront') != null && queryParams.get('chargePortFront') === 'true') {
      dispatch(updateChargePortFront(true));
    }

    if (queryParams.get('chargePortFrontLeft') != null && queryParams.get('chargePortFrontLeft') === 'true') {
      dispatch(updateChargePortFrontLeft(true));
    }

    if (queryParams.get('chargePortFrontRight') != null && queryParams.get('chargePortFrontRight') === 'true') {
      dispatch(updateChargePortFrontRight(true));
    }

    if (queryParams.get('chargePortRearLeft') != null && queryParams.get('chargePortRearLeft') === 'true') {
      dispatch(updateChargePortRearLeft(true));
    }

    if (queryParams.get('chargePortRearRight') != null && queryParams.get('chargePortRearRight') === 'true') {
      dispatch(updateChargePortRearRight(true));
    }

    // Regen query params

    if (queryParams.get('liftOfRegen') != null && queryParams.get('liftOfRegen') === 'true') {
      dispatch(updateLiftOfRegen(true));
    }

    if (queryParams.get('liftOfRegenWithHoldMode') != null && queryParams.get('liftOfRegenWithHoldMode') === 'true') {
      dispatch(updateLiftOfRegenWithHoldMode(true));
    }

    if (queryParams.get('liftOfRegenLevels') != null && queryParams.get('liftOfRegenLevels') === 'true') {
      dispatch(updateLiftOfRegenLevels(true));
    }

    if (queryParams.get('coasting') != null && queryParams.get('coasting') === 'true') {
      dispatch(updateCoasting(true));
    }

    if (queryParams.get('adaptiveRegen') != null && queryParams.get('adaptiveRegen') === 'true') {
      dispatch(updateAdaptiveRegen(true));
    }

    // Battery

    if (queryParams.get('lfpChemistry') != null && queryParams.get('lfpChemistry') === 'true') {
      dispatch(updateLfpChemistry(true));
    }

    if (queryParams.get('batteryHeatingManual') != null && queryParams.get('batteryHeatingManual') === 'true') {
      dispatch(updateBatteryHeatingManual(true));
    }

    if (queryParams.get('batteryHeatingNavigation') != null && queryParams.get('batteryHeatingNavigation') === 'true') {
      dispatch(updateBatteryHeatingNavigation(true));
    }

    // Seats


    if (
      queryParams.get('secondRowExecutiveSeat') != null &&
      queryParams.get('secondRowExecutiveSeat') === 'true'
    ) {
      dispatch(updateSecondRowExecutiveSeat(true));
    }

    if (queryParams.get('sortOrder') != null) {
      dispatch(updateSortOrder(queryParams.get('sortOrder')));
    }
    if (queryParams.get('headUpDisplay') != null && queryParams.get('headUpDisplay') === 'true') {
      dispatch(updateHeadUpDisplay(true));
    }
    if (
      queryParams.get('instrumentCluster') != null &&
      queryParams.get('instrumentCluster') === 'true'
    ) {
      dispatch(updateInstrumentCluster(true));
    }
    if (queryParams.get('androidAuto') != null && queryParams.get('androidAuto') === 'true') {
      dispatch(updateAndroidAuto(true));
    }
    if (queryParams.get('appleCarPlay') != null && queryParams.get('appleCarPlay') === 'true') {
      dispatch(updateAppleCarPlay(true));
    }


    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!loading) {
      const queryParams = new URLSearchParams();
      Object.entries(initSearch).forEach(([key, value]) => {
        if (value && (value !== '' && value.length == undefined || value.length > 0)) {
          queryParams.set(key, value);
        }
      });
      location.search = queryParams.toString();
      history(location, { replace: true });
    }
  }, [initSearch]);

  useEffect(() => {
    if (isReady) {
      void fetchSearchOptionData();
      void fetchData(initSearch);
    }
  }, [isReady]);

  useEffect(() => {
    if (!loading) {
      void fetchData(initSearch);
    }
  }, [initSearch]);

  const handleSortOrderChange = (filterList: string) => {
    dispatch(updateSortOrder(filterList));
  };

  const handleBrandChange = (filterList: string[]) => {
    dispatch(updateBrands(filterList));
  };

  const brandFilterOptions: MultiSelectOption[] = brandsResult.map((provider: string) => ({
    label: provider,
    value: provider,
  }));

  const bodyTypesFilterOptions: MultiSelectOption[] = bodyTypesResult.map((key) => ({
    label: key,
    value: key,
    checked: initSearch.evType === undefined || initSearch.evType.includes(key),
  }));

  const paintColorFilterOptions: MultiSelectOption[] = colorResult.map((key) => ({
    label: key,
    value: key,
    checked: initSearch.colors === undefined || initSearch.colors.includes(key),
  }));

  const numberOfSeatsOptions: MultiSelectOption[] = seatConfigResult.map((key) => ({
    label: key,
    value: key,
    checked:
      initSearch.seatConfiguration === undefined || initSearch.seatConfiguration.includes(key),
  }));

  const handleTypeChange = (names: string[]) => {
    dispatch(updateEvType(names));
  };

  const handleSeatConfigChange = (names: string[]) => {
    dispatch(updateSeatConfig(names));
  };

  const handleAllWheelDriveChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateAllWheelDrive(event.target.checked));
  };

  const handleRWDChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateRWD(event.target.checked));
  };

  const handleFWDChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateFWD(event.target.checked));
  };

  const handleRearAxleSteeringChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateRearAxleSteering(event.target.checked));
  };

  const handleNightVisionChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateNightVision(event.target.checked));
  };

  const handleAdaptiveSuspensionChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateAdaptiveDamping(event.target.checked));
  };
  const handleAirSuspensionChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateAdaptiveAirSuspension(event.target.checked));
  };

  const handleInstrumentClusterChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateInstrumentCluster(event.target.checked));
  };
  const handleHeadUpDisplayChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateHeadUpDisplay(event.target.checked));
  };
  const handleAppleCarPlayChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateAppleCarPlay(event.target.checked));
  };
  const handleAdaptiveCruiseControlChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateAdaptiveCruiseControl(event.target.checked));
  };
  const handleAutoSteerChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateAutoSteer(event.target.checked));
  };
  const handleAndroidAutoChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateAndroidAuto(event.target.checked));
  };
  const handleLfpChemistryChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateLfpChemistry(event.target.checked));
  };
  const handleBatteryHeatingNavigationChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    dispatch(updateBatteryHeatingNavigation(event.target.checked));
  };
  const handleBatteryHeatingManualChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateBatteryHeatingManual(event.target.checked));
  };
  const handleColorChange = (names: string[]) => {
    dispatch(updateColors(names));
  };
  const handleFirstRowSeatsHeatingChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateFirstRowSeatsHeating(event.target.checked));
  };
  const handleFirstRowSeatsVentilationChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    dispatch(updateFirstRowSeatsVentilation(event.target.checked));
  };
  const handleFirstRowSeatsMassageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateFirstRowSeatsMassage(event.target.checked));
  };
  const handleSecondRowSeatsHeatingChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateSecondRowSeatsHeating(event.target.checked));
  };
  const handleSecondRowSeatsVentilationChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    dispatch(updateSecondRowSeatsVentilation(event.target.checked));
  };
  const handleSecondRowSeatsMassageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateSecondRowSeatsMassage(event.target.checked));
  };
  const handleFirstRowAdjustableThighSupportChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    dispatch(updateFirstRowAdjustableThighSupport(event.target.checked));
  };
  const handleSecondRowReclineChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateSecondRowRecline(event.target.checked));
  };
  const handleSecondRowExecutiveSeatChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateSecondRowExecutiveSeat(event.target.checked));
  };
  const handleChargePortFrontChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateChargePortFront(event.target.checked));
  };
  const handleChargePortFrontLeftChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateChargePortFrontLeft(event.target.checked));
  };
  const handleChargePortFrontRightChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateChargePortFrontRight(event.target.checked));
  };
  const handleChargePortRearLeftChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateChargePortRearLeft(event.target.checked));
  };
  const handleChargePortRearRightChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateChargePortRearRight(event.target.checked));
  };
  const handleLiftOfRegenChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateLiftOfRegen(event.target.checked));
  };
  const handleIncludeDiscontinedChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateIncludeDiscontinued(event.target.checked));
  };
  const handleLiftOfRegenWithHoldModeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateLiftOfRegenWithHoldMode(event.target.checked));
  };
  const handleBlendedBrakesChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateBlendedBrakes(event.target.checked));
  };
  const handleAdaptiveRegenChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateAdaptiveRegen(event.target.checked));
  };
  const handleLiftOfRegenLevelsChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateLiftOfRegenLevels(event.target.checked));
  };
  const handleCoastingChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateCoasting(event.target.checked));
  };
  const handleMinimumHpChange =({ target }: { target: HTMLInputElement }) =>
    dispatch(updateMinimumHp(target.value)
  );
   const handleMinimumWltpRangeChange = ({ target }: { target: HTMLInputElement }) =>
    dispatch(updateMinimumWltpRange(target.value)
    );
  const handleMinimumTrailerWeightChange =  ({ target }: { target: HTMLInputElement }) =>
    dispatch(updateMinumTrailerWeight(target.value)
    );

  const OnAdd = (evid: string): void => {
   
      const updatedCompareList = [...compareList, evid];
      dispatch(updateCompareList(updatedCompareList));
    };
   
   
  const OnRemove = (evid: string): void => {
    {
      const updatedCompareList = compareList.filter(element => element !== evid);
      dispatch(updateCompareList(updatedCompareList));
    }
 };
  
 const disableCompare = compareList.length === 0;

  const delegableApiAccordions = () => {
    if (error) {
      return (
        <Panel
          title={t('api_delegation.data_retrieval_failed')}
          variant={PanelVariant.Error}
          forceMobileLayout
        >
          <div>
            {t('api_delegation.error_message')}: {error}
          </div>
        </Panel>
      );
    } else if (loading) {
      return (
        <center>
          <Spinner
            title='Spinner'
            size='3xLarge'
            variant='interaction'
          />
        </center>
      );
    }
    return evsearchresult.map((ev: Ev, index: Key | null | undefined) => {
      return (
        <EvSearchAccordion
          title={ev.name}
          subtitle={ev.sortValue + ' ' + ev.sortParameter}
          key={index}
          maxPower={ev.maxPowerKw}
          topSpeedKph={ev.topSpeedKph}
          infoUri={ev.infoUri}
          wltpConsumption={ev.wltpConsumption}
          wltpRange={ev.wltpRange}
          netBattery={ev.netBattery}
          zeroTo100={ev.zeroTo100}
          thumbUri={ev.thumbUri}
          averageDcChargingSpeed={ev.averageDcChargingSpeed}
          maxDcChargingSpeed={ev.maxDcChargingSpeed}
          evid={ev.evId}
        ></EvSearchAccordion>
      );
    });
  };

  const delegableActionBar = () => {
    if (error) {
      return (
        <Panel
          title={t('api_delegation.data_retrieval_failed')}
          variant={PanelVariant.Error}
          forceMobileLayout
        >
          <div>
            {t('api_delegation.error_message')}: {error}
          </div>
        </Panel>
      );
    } else if (loading) {
      return (
        <center>
          <Spinner
            title='Spinner'
            size='3xLarge'
            variant='interaction'
          />
        </center>
      );
    }
    return evsearchresult.map((ev: Ev, index: Key | null | undefined) => {
      
      const exists = compareList.includes(ev.evId);
      const status = exists ? "Compared" : "NotCompared";


 
      return (
        <EvSearchActionBar
          title={ev.name}
          subtitle={ev.sortValue + ' ' + ev.sortParameter}
          key={index}
          maxPower={ev.maxPowerKw}
          topSpeedKph={ev.topSpeedKph}
          infoUri={ev.infoUri}
          wltpConsumption={ev.wltpConsumption}
          wltpRange={ev.wltpRange}
          netBattery={ev.netBattery}
          zeroTo100={ev.zeroTo100}
          thumbUri={ev.thumbUri}
          averageDcChargingSpeed={ev.averageDcChargingSpeed}
          maxDcChargingSpeed={ev.maxDcChargingSpeed}
          evid={ev.evId}
          onAddClick={() => {
            OnAdd(ev.evId);
          }}
          onRemoveClick={() => {
            OnRemove(ev.evId);
          }}
          status={status}
          compact={isSm}
        ></EvSearchActionBar>
      );
    });
  };


  return (
    <PageContainer>
      <Page>
        <PageContent>
          <div className={classes.pageContent}>
            <Heading size='large'>{String(t('evsearch.welcome'))}</Heading>
            <Ingress size='medium'>
            {String(t('evsearch.searchintro'))}
            <Alert severity="info">
            {String(t('evsearch.guide'))}
            </Alert>
            <br />
            </Ingress>
            <div className={classes.filtergrid}>
              <div>
              <Filter
                options={brandFilterOptions}
                icon={<FilterIcon />}
                label={String(t('evsearch.brandfilter'))}
                applyButtonLabel={String(t('common.apply'))}
                resetButtonLabel={String(t('common.reset_choices'))}
                closeButtonAriaLabel={String(t('common.close'))}
                searchable={true}
                onApply={handleBrandChange}
                fullScreenModal={isSm}
                values={initSearch.brands}
              />
              </div>
              <div>
              <Filter
                options={bodyTypesFilterOptions}
                icon={<CarIcon />}
                label={String(t('evsearch.evtypefilter'))}
                applyButtonLabel={String(t('common.apply'))}
                resetButtonLabel={String(t('common.reset_choices'))}
                closeButtonAriaLabel={String(t('common.close'))}
                searchable={true}
                onApply={handleTypeChange}
                fullScreenModal={isSm}
                values={initSearch.evType}
              />
              </div>
              <div>
                <Filter
                options={paintColorFilterOptions}
                icon={<PaletteIcon />}
                label={String(t('evsearch.paintColor'))}
                applyButtonLabel={String(t('common.apply'))}
                resetButtonLabel={String(t('common.reset_choices'))}
                closeButtonAriaLabel={String(t('common.close'))}
                searchable={true}
                onApply={handleColorChange}
                fullScreenModal={isSm}
                values={initSearch.colors}
              />
              </div>
              <div>
              <Filter
                options={numberOfSeatsOptions}
                icon={<PersonGroupIcon />}
                label={String(t('evsearch.numberOfSeasts'))}
                applyButtonLabel={String(t('common.apply'))}
                resetButtonLabel={String(t('common.reset_choices'))}
                closeButtonAriaLabel={String(t('common.close'))}
                searchable={true}
                onApply={handleSeatConfigChange}
                fullScreenModal={isSm}
                values={initSearch.seatConfiguration}
              />
              </div>
           
            </div>
            <div  className={classes.filtergrid}>
             <div>
              <Textfield
                onChange={handleMinimumWltpRangeChange}  
                label={String(t('evsearch.minimumwltprange'))}
                type='number'
                inputMode='numeric'
                />

              </div>
              <div>
              <Textfield
                onChange={handleMinimumHpChange}  
                label={String(t('evsearch.minimumhp'))}
                type='number'
                inputMode='numeric'
                />
              </div>
              <div>
              <Textfield
                onChange={handleMinimumTrailerWeightChange}  
                label={String(t('evsearch.minimumtrailerweight'))}
                type='number'
                inputMode='numeric'
                />
              </div>
            </div>
            <Switch value='true' onChange={handleIncludeDiscontinedChange}>
              {String(t('evsearch.includediscontinued'))}
            </Switch>

            <Accordion
              border={true}
              color='subtle'
              onClick={() => {
                setOpen(!open);
              }}
            >
              <Accordion.Item>
                <Accordion.Header><FilterIcon fontSize={20}></FilterIcon> {String(t('evsearch.advanced'))}</Accordion.Header>
                <Accordion.Content>
                <b>Select advanced filters area below</b><br />
                 <CarIcon fontSize={20} title={String(t('evsearch.advanceddrivetrain'))} /> {String(t('evsearch.advanceddrivetrain'))}<br />
                <LightningIcon fontSize={20} title={String(t('evsearch.advancedbattery'))} /> {String(t('evsearch.advancedbattery'))}<br />
                <FingerButtonIcon fontSize={20} title={String(t('evsearch.advanceduserinterface'))} /> {String(t('evsearch.advanceduserinterface'))}<br />
                <RobotSmileIcon fontSize={20} title={String(t('evsearch.advancedadas'))} /> {String(t('evsearch.advancedadas'))}<br />
             
                <Tabs  defaultValue='value2' size='small'>
                  <Tabs.List>
                    <Tabs.Tab value='value2' icon={<CarIcon title={String(t('evsearch.advanceddrivetrain'))} />} />
                    <Tabs.Tab value='value3' icon={<LightningIcon title={String(t('evsearch.advancedbattery'))} />} />
                    <Tabs.Tab value='value4' icon={<FingerButtonIcon title={String(t('evsearch.advanceduserinterface'))} />}/>
                    <Tabs.Tab value='value1' icon={<RobotSmileIcon title={String(t('evsearch.advancedadas'))} />} />
                   </Tabs.List>
                  <Tabs.Content value='value1'>
                  <div className={classes.cards}>
                    <div className={classes.card}>
                     <Checkbox.Group
                          description={String(t('evsearch.adas_description'))}
                          error=""
                          legend={String(t('evsearch.adas'))}
                          onChange={function noRefCheck(){}}
                          >
                        <Checkbox
                          checked={initSearch.nightVision}
                          children='Nightvision'
                          onChange={handleNightVisionChange}
                          size='xsmall'
                          value='true'
                        ></Checkbox>
                        <Checkbox
                          checked={initSearch.adaptiveCruiseControl}
                          children='AdaptiveCruiseControl'
                          onChange={handleAdaptiveCruiseControlChange}
                          size='xsmall'
                          value='true'
                        ></Checkbox>
                        <Checkbox
                          checked={initSearch.autoSteer}
                          children='Autosteer'
                          onChange={handleAutoSteerChange}
                          size='xsmall'
                          value='true'
                        ></Checkbox>
                      </Checkbox.Group>
                      Read more about Adavanced Driver Assist Systems in our{' '}
                      <a href='../technology/driverassistance/'>technology section</a>
                    </div>
                </div>
                  
                  </Tabs.Content>
                  <Tabs.Content value='value2'>
                    
                  <div className={classes.cards}>
                    <div className={classes.card}>
                        <Checkbox.Group
                          description="Select drivetrain features"
                          error=""
                          legend={String(t('evsearch.drivetrain'))}
                          onChange={function noRefCheck(){}}
                        >
                        <Checkbox
                            checked={initSearch.allWheelDrive}
                            children='All wheel drive'
                            onChange={handleAllWheelDriveChange}
                            size='xsmall'
                            value='true'
                          ></Checkbox>
                          <Checkbox
                            checked={initSearch.rWD}
                            children='RWD'
                            onChange={handleRWDChange}
                            size='xsmall'
                            value='true'
                          ></Checkbox>
                          <Checkbox
                            checked={initSearch.fWD}
                            children='FWD'
                            onChange={handleFWDChange}
                            size='xsmall'
                            value='true'
                          ></Checkbox>
                          <Checkbox
                            checked={initSearch.adaptiveSuspension}
                            children='Adaptive damping'
                            onChange={handleAdaptiveSuspensionChange}
                            size='xsmall'
                            value='true'
                          ></Checkbox>
                          <Checkbox
                            checked={initSearch.airSuspension}
                            children='Air Suspension'
                            onChange={handleAirSuspensionChange}
                            size='xsmall'
                            value='true'
                          ></Checkbox>
                          <Checkbox
                            checked={initSearch.rearAxleSteering}
                            children='Rear Axle Steering'
                            onChange={handleRearAxleSteeringChange}
                            size='xsmall'
                            value='true'
                          ></Checkbox>
                  </Checkbox.Group>
                          </div>

                          <div className={classes.card}>
                              
                              <Checkbox.Group
                                  description="Select regen features"
                                  error=""
                                  legend={String(t('evsearch.regen'))}
                                  onChange={function noRefCheck(){}}
                                  >
                                <Checkbox
                                  checked={initSearch.liftOfRegen}
                                  children='Lift-of regen (one-pedal-driving)'
                                  onChange={handleLiftOfRegenChange}
                                  size='xsmall'
                                  value='true'
                                ></Checkbox>
                                <Checkbox
                                  checked={initSearch.liftOfRegenWithHoldMode}
                                  children='Lift-of regen with hold mode'
                                  onChange={handleLiftOfRegenWithHoldModeChange}
                                  size='xsmall'
                                  value='true'
                                ></Checkbox>
                                <Checkbox
                                  checked={initSearch.liftOfRegenLevels}
                                  children='Adjustable lif-of regel levels'
                                  onChange={handleLiftOfRegenLevelsChange}
                                  size='xsmall'
                                  value='true'
                                ></Checkbox>
                                <Checkbox
                                  checked={initSearch.blendedBrakes}
                                  children='Blended brakes (regen on brake pedal)'
                                  onChange={handleBlendedBrakesChange}
                                  size='xsmall'
                                  value='true'
                                ></Checkbox>
                                <Checkbox
                                  checked={initSearch.coasting}
                                  children='Car can coast (roll freely without regen)'
                                  onChange={handleCoastingChange}
                                  size='xsmall'
                                  value='true'
                                ></Checkbox>
                                <Checkbox
                                  checked={initSearch.adaptiveRegen}
                                  children='Adaptive regen (automatic regen when needed when coasting)'
                                  onChange={handleAdaptiveRegenChange}
                                  size='xsmall'
                                  value='true'
                                ></Checkbox>
                              </Checkbox.Group>
                              Read more about regenerative braking in our{' '}
                              <a href='../technology/regen/'>technology section</a>
                            </div>
                      </div>

                  </Tabs.Content>
                  <Tabs.Content value='value3'>
                    
                  <div className={classes.cards}>
                 
                 <div className={classes.card}>
                 <Checkbox.Group
                       description="Select battery features"
                       error=""
                       legend={String(t('evsearch.battery'))}
                       onChange={function noRefCheck(){}}
                         >
                     <Checkbox
                       checked={initSearch.lfpChemistry}
                       children='LFP Chemistry'
                       onChange={handleLfpChemistryChange}
                       size='xsmall'
                       value='true'
                     ></Checkbox>
                     <Checkbox
                       checked={initSearch.batteryHeatingManual}
                       children='Manual battery heating'
                       onChange={handleBatteryHeatingManualChange}
                       size='xsmall'
                       value='true'
                     ></Checkbox>
                     <Checkbox
                       checked={initSearch.batteryHeatingNavigation}
                       children='Battery heating when navigating to charger'
                       onChange={handleBatteryHeatingNavigationChange}
                       size='xsmall'
                       value='true'
                     ></Checkbox>
                   </Checkbox.Group>
                   Read more about EV batteries in our{' '}
                   <a href='../technology/battery/'>technology section</a>
                 </div>
                 <div className={classes.card}>
                   <Checkbox.Group
                       description="Select charging features"
                       error=""
                       legend={String(t('evsearch.charging'))}
                       onChange={function noRefCheck(){}}
                         >
                         <Checkbox
                           checked={initSearch.chargePortFront}
                           children='Chargeport located front'
                           onChange={handleChargePortFrontChange}
                           size='xsmall'
                           value='true'
                         ></Checkbox>
                         <Checkbox
                           checked={initSearch.chargePortFrontLeft}
                           children='Chargeport located front left side'
                           onChange={handleChargePortFrontLeftChange}
                           size='xsmall'
                           value='true'
                         ></Checkbox>
                         <Checkbox
                           checked={initSearch.chargePortFrontRight}
                           children='Chargeport located front right side'
                           onChange={handleChargePortFrontRightChange}
                           size='xsmall'
                           value='true'
                         ></Checkbox>
                         <Checkbox
                           checked={initSearch.chargePortRearLeft}
                           children='Chargeport located rear left side'
                           onChange={handleChargePortRearLeftChange}
                           size='xsmall'
                           value='true'
                         ></Checkbox>
                         <Checkbox
                           checked={initSearch.chargePortRearRight}
                           children='Chargeport located rear right side'
                           onChange={handleChargePortRearRightChange}
                           size='xsmall'
                           value='true'
                         ></Checkbox>
                   </Checkbox.Group>
                   Read more about charging in our{' '}
                   <a href='../technology/charging/'>technology section</a>
                 </div>
                 </div>
                 </Tabs.Content>
                 <Tabs.Content value='value4'>
                 <div className={classes.cards}>
                   <div className={classes.card}>
                      <Checkbox.Group
                          description="Select UI features"
                          error=""
                          legend={String(t('evsearch.interface'))}
                          onChange={function noRefCheck(){}}
                          >
                        <Checkbox
                          checked={initSearch.headUpDisplay}
                          children='Head Up Display'
                          onChange={handleHeadUpDisplayChange}
                          size='xsmall'
                          value='true'
                        ></Checkbox>
                        <Checkbox
                          checked={initSearch.instrumentCluster}
                          children='Dedicated Instrument Cluster'
                          onChange={handleInstrumentClusterChange}
                          size='xsmall'
                          value='true'
                        ></Checkbox>
                        <Checkbox
                          checked={initSearch.androidAuto}
                          children='Android Auto Support'
                          onChange={handleAndroidAutoChange}
                          size='xsmall'
                          value='true'
                        ></Checkbox>
                        <Checkbox
                          checked={initSearch.appleCarPlay}
                          children='Apple Car Play Support'
                          onChange={handleAppleCarPlayChange}
                          size='xsmall'
                          value='true'
                        ></Checkbox>
                      </Checkbox.Group>
                    </div>
                    <div className={classes.card}>
                      <Checkbox.Group
                          description="Select seats features"
                          error=""
                          legend={String(t('evsearch.seats'))}
                          onChange={function noRefCheck(){}}
                            >
                              <Checkbox
                                checked={initSearch.firstRowSeatsHeating}
                                children='First row seat Heating'
                                onChange={handleFirstRowSeatsHeatingChange}
                                size='xsmall'
                                value='true'
                              ></Checkbox>
                              <Checkbox
                                checked={initSearch.firstRowSeatsVentilation}
                                children='First row seat ventilation'
                                onChange={handleFirstRowSeatsVentilationChange}
                                size='xsmall'
                                value='true'
                              ></Checkbox>
                              <Checkbox
                                checked={initSearch.firstRowSeatsMassage}
                                children='First row seat massage'
                                onChange={handleFirstRowSeatsMassageChange}
                                size='xsmall'
                                value='true'
                              ></Checkbox>
                              <Checkbox
                                checked={initSearch.firstRowAdjustableThighSupport}
                                children='First row adjustable thigh support'
                                onChange={handleFirstRowAdjustableThighSupportChange}
                                size='xsmall'
                                value='true'
                              ></Checkbox>
                              <Checkbox
                                checked={initSearch.secondRowSeatsHeating}
                                children='Second row seat Heating'
                                onChange={handleSecondRowSeatsHeatingChange}
                                size='xsmall'
                                value='true'
                              ></Checkbox>
                              <Checkbox
                                checked={initSearch.secondRowSeatsVentilation}
                                children='Second row seat ventilation'
                                onChange={handleSecondRowSeatsVentilationChange}
                                size='xsmall'
                                value='true'
                              ></Checkbox>
                              <Checkbox
                                checked={initSearch.secondRowSeatsMassage}
                                children='Second row seat massage'
                                onChange={handleSecondRowSeatsMassageChange}
                                size='xsmall'
                                value='true'
                              ></Checkbox>
                              <Checkbox
                                checked={initSearch.secondRowRecline}
                                children='Second row recline'
                                onChange={handleSecondRowReclineChange}
                                size='xsmall'
                                value='true'
                              ></Checkbox>
                              <Checkbox
                                checked={initSearch.secondRowExecutiveSeat}
                                children='Second row executive seat'
                                onChange={handleSecondRowExecutiveSeatChange}
                                size='xsmall'
                                value='true'
                              ></Checkbox>
                      </Checkbox.Group>
                    </div>
            
             

                    
                  </div>
                 </Tabs.Content>
                </Tabs>

           
                </Accordion.Content>
              </Accordion.Item>
            </Accordion>

            <Select
              label={String(t('evsearch.sortorder'))}
              multiple={false}
              value={initSearch.sortOrder}
              onChange={handleSortOrderChange}
              options={[
                { label: String(t('evsearch.sortorderbrand')), value: 'Name' },
                { label: String(t('evsearch.specwltprange')), value: 'RangeMinimumWltp' },
                { label: String(t('evsearch.specwltpconsumption')), value: 'WltpBasicConsumption' },
                { label: String(t('evsearch.sortordernetsize')), value: 'NetBattery' },
                { label: String(t('evsearch.sortordernetsizedesc')), value: 'NetBatteryDesc' },
                { label: String(t('evsearch.maxpowersort')), value: 'PowerDesc' },
                { label: String(t('evsearch.topspeedsort')), value: 'TopSpeedDesc' },
                { label: String(t('evsearch.maxdcchargingsort')), value: 'MaxDCCharging' },
                {
                  label: String(t('evsearch.averagechargingspeed0100')),
                  value: 'AverageChargingSpeedDesc',
                },
                {
                  label: String(t('evsearch.averagechargingspeed10100')),
                  value: 'AverageChargingSpeed10100Desc',
                },
                {
                  label: String(t('evsearch.averagechargingspeed1080')),
                  value: 'AverageChargingSpeed1080Desc',
                },
                { label: String(t('evsearch.sort0100kmh')), value: 'ZeroTo100' },
                {
                  label: String(t('evsearch.sort1000kmdrivingtime')),
                  value: 'DrivingTime1000kmChallenge',
                },
                {
                  label: String(t('evsearch.sort1000kmaveragespeed')),
                  value: 'AverageSpeed1000kmChallengeDesc',
                },
                {
                  label: String(t('evsearch.travelspeedwltpcyclus')),
                  value: 'TravelSpeedWltpDesc',
                },
                { label: String(t('evsearch.travelspeed120kmh')), value: 'TravelSpeed120kmhDesc' },
                { label: String(t('evsearch.nominalvoltagesort')), value: 'NominalVoltage' },
                { label: String(t('evsearch.trunksize')), value: 'TrunkSizeDesc' },
                { label: String(t('evsearch.maxtrunksize')), value: 'MaxTrunkSizeDesc' },
                { label: String(t('evsearch.maxload')), value: 'MaxLoadDesc' },
                { label: String(t('evsearch.maxtrailer')), value: 'MaxTrailerSizeDesc' },
                {
                  label: String(t('evsearch.maxgroundclearance')),
                  value: 'MaxGroundClearanceDesc',
                },
                { label: String(t('evsearch.mingroundclearance')), value: 'MinGroundClearance' },
                {
                  label: String(t('evsearch.suspensionheightadjustment')),
                  value: 'SuspensionHeightAdjustment',
                },
                {
                  label: String(t('evsearch.length')),
                  value: 'Length',
                },
                {
                  label: String(t('evsearch.wheelbase')),
                  value: 'Wheelbase',
                },
                {
                  label: String(t('evsearch.grossweight')),
                  value: 'WeightUnladenDINKg',
                },
                {
                  label: String(t('evsearch.EnergyCharged10Percent10Min')),
                  value: 'EnergyCharged10Percent10Min',
                },
                {
                  label: String(t('evsearch.EnergyCharged10Percent15Min')),
                  value: 'EnergyCharged10Percent15Min',
                },
                {
                  label: String(t('evsearch.EnergyCharged10Percent20Min')),
                  value: 'EnergyCharged10Percent20Min',
                },
                {
                  label: String(t('evsearch.EnergyCharged10Percent25Min')),
                  value: 'EnergyCharged10Percent25Min',
                },
                {
                  label: String(t('evsearch.EnergyCharged10Percent30Min')),
                  value: 'EnergyCharged10Percent30Min',
                },
                {
                  label: String(t('evsearch.DrivingDistance120kmhCharged10Percent10Min')),
                  value: 'DrivingDistance120kmhCharged10Percent10Min',
                },
                {
                  label: String(t('evsearch.DrivingDistance120kmhCharged10Percent15Min')),
                  value: 'DrivingDistance120kmhCharged10Percent15Min',
                },
                {
                  label: String(t('evsearch.DrivingDistance120kmhCharged10Percent20Min')),
                  value: 'DrivingDistance120kmhCharged10Percent20Min',
                },
                {
                  label: String(t('evsearch.DrivingDistance120kmhCharged10Percent25Min')),
                  value: 'DrivingDistance120kmhCharged10Percent25Min',
                },
                {
                  label: String(t('evsearch.DrivingDistance120kmhCharged10Percent30Min')),
                  value: 'DrivingDistance120kmhCharged10Percent30Min',
                },
                {
                  label: String(t('evsearch.DrivingDistanceWltpCharged10Percent10Min')),
                  value: 'DrivingDistanceWltpCharged10Percent10Min',
                },
                {
                  label: String(t('evsearch.DrivingDistanceWltpCharged10Percent15Min')),
                  value: 'DrivingDistanceWltpCharged10Percent15Min',
                },
                {
                  label: String(t('evsearch.DrivingDistanceWltpCharged10Percent20Min')),
                  value: 'DrivingDistanceWltpCharged10Percent20Min',
                },
                {
                  label: String(t('evsearch.DrivingDistanceWltpCharged10Percent25Min')),
                  value: 'DrivingDistanceWltpCharged10Percent25Min',
                },
                {
                  label: String(t('evsearch.DrivingDistanceWltpCharged10Percent30Min')),
                  value: 'DrivingDistanceWltpCharged10Percent30Min',
                },
              ]}
            ></Select>
          </div>
          <div className={classes.pageContentAccordionsContainer}>
            <div className={classes.apiAccordions}>
          
              <h2 className={classes.resultInfo}>
                {evsearchCount} {t('evsearch.searchresult')}:
              </h2>
              <Button fullWidth onClick={openUrl} disabled={disableCompare} className={classes.comparebutton} color='success' icon={<CarIcon />}>
                Compare Evs
              </Button>
              <div className={classes.accordionScrollContainer}>{delegableActionBar()}</div>
              <Button fullWidth onClick={openUrl} disabled={disableCompare} className={classes.comparebutton} color='success' icon={<CarIcon />}>
                Compare Evs
              </Button>
            </div>
          </div>
        </PageContent>
      </Page>
    </PageContainer>
  );
};
