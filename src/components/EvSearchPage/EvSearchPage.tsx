import { Panel, PanelVariant } from '@altinn/altinn-design-system';
import type { MultiSelectOption } from '@digdir/design-system-react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Select,
  Tabs,
  Checkbox,
  Spinner,
  Heading,
  Ingress,
  Accordion,
} from '@digdir/design-system-react';
import '@digdir/design-system-tokens/brand/digdir/tokens.css';
import type { Key } from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { FilterIcon } from '@navikt/aksel-icons';

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
} from '@/rtk/features/evSearch/evsearchSlice';
import type { Ev, EvSearch } from '@/rtk/features/evSearch/evsearchSlice';
import { useAppDispatch, useAppSelector } from '@/rtk/app/hooks';
import { useMediaQuery } from '@/resources/hooks';

import { PageContainer } from '../Reusables/PageContainer';
import { EvSearchAccordion } from '../Reusables/EvSearchAccordion';
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

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get('secondRowExecutiveSeat') != null) {
      dispatch(updateSecondRowExecutiveSeat(true));
    }
    if (queryParams.get('airSuspension') != null) {
      dispatch(updateAdaptiveAirSuspension(true));
    }
    if (queryParams.get('sortOrder') != null) {
      dispatch(updateSortOrder(queryParams.get('sortOrder')));
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!loading) {
      const queryParams = new URLSearchParams();
      Object.entries(initSearch).forEach(([key, value]) => {
        if (value) {
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
        ></EvSearchAccordion>
      );
    });
  };

  return (
    <PageContainer>
      <Page>
        <PageContent>
          <div className={classes.pageContent}>
            <Heading size='large'>Welcome to EVKX EV Search</Heading>
            <Ingress size='medium'>
              EVKX offers the most comprehensive search for EVs.
              <br />
              You can search and sort on a whole lot of parameters. <br />
              Please read our <a href='/guides/evsearch/'>search guide</a>
              <br />
              <br />
            </Ingress>
            <div className={classes.filterSection}>
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
              />
              <Filter
                options={bodyTypesFilterOptions}
                icon={<FilterIcon />}
                label={String(t('evsearch.evtypefilter'))}
                applyButtonLabel={String(t('common.apply'))}
                resetButtonLabel={String(t('common.reset_choices'))}
                closeButtonAriaLabel={String(t('common.close'))}
                searchable={true}
                onApply={handleTypeChange}
                fullScreenModal={isSm}
              />
            </div>
            <div className={classes.filterSection}>
              <Filter
                options={paintColorFilterOptions}
                icon={<FilterIcon />}
                label={String(t('evsearch.paintColor'))}
                applyButtonLabel={String(t('common.apply'))}
                resetButtonLabel={String(t('common.reset_choices'))}
                closeButtonAriaLabel={String(t('common.close'))}
                searchable={true}
                onApply={handleColorChange}
                fullScreenModal={isSm}
              />
              <Filter
                options={numberOfSeatsOptions}
                icon={<FilterIcon />}
                label={String(t('evsearch.numberOfSeasts'))}
                applyButtonLabel={String(t('common.apply'))}
                resetButtonLabel={String(t('common.reset_choices'))}
                closeButtonAriaLabel={String(t('common.close'))}
                searchable={true}
                onApply={handleSeatConfigChange}
                fullScreenModal={isSm}
              />
            </div>
            <Accordion
              border={true}
              color='subtle'
              onClick={() => {
                setOpen(!open);
              }}
            >
              <Accordion.Item>
                <Accordion.Header>{String(t('evsearch.advanced'))}</Accordion.Header>
                <Accordion.Content>
                  <div className={classes.cards}>
                    <div className={classes.card}>
                      <Heading size='small'>{String(t('evsearch.drivetrain'))}</Heading>
                      <Checkbox
                        checked={initSearch.allWheelDrive}
                        label='All wheel drive'
                        onChange={handleAllWheelDriveChange}
                        compact={true}
                      ></Checkbox>
                      <br />
                      <Checkbox
                        checked={initSearch.rWD}
                        label='RWD'
                        onChange={handleRWDChange}
                        compact={true}
                      ></Checkbox>
                      <br />
                      <Checkbox
                        checked={initSearch.fWD}
                        label='FWD'
                        onChange={handleFWDChange}
                        compact={true}
                      ></Checkbox>
                      <br />
                      <Checkbox
                        checked={initSearch.adaptiveSuspension}
                        label='Adaptive Suspension'
                        onChange={handleAdaptiveSuspensionChange}
                        compact={true}
                      ></Checkbox>
                      <br />
                      <Checkbox
                        checked={initSearch.airSuspension}
                        label='Air Suspension'
                        onChange={handleAirSuspensionChange}
                        compact={true}
                      ></Checkbox>
                      <br />
                      <Checkbox
                        checked={initSearch.rearAxleSteering}
                        label='Rear Axle Steering'
                        onChange={handleRearAxleSteeringChange}
                        compact={true}
                      ></Checkbox>
                    </div>
                    <div className={classes.card}>
                      <Heading size='small'>{String(t('evsearch.adas'))}</Heading>
                      <Checkbox
                        checked={initSearch.nightVision}
                        label='Nightvision'
                        onChange={handleNightVisionChange}
                        compact={true}
                      ></Checkbox>
                      <br />
                      <Checkbox
                        checked={initSearch.adaptiveCruiseControl}
                        label='AdaptiveCruiseControl'
                        onChange={handleAdaptiveCruiseControlChange}
                        compact={true}
                      ></Checkbox>
                      <br />
                      <Checkbox
                        checked={initSearch.autoSteer}
                        label='Autosteer'
                        onChange={handleAutoSteerChange}
                        compact={true}
                      ></Checkbox>
                      <br />
                      Read more about Adavanced Driver Assist Systems in our{' '}
                      <a href='../technology/driverassistance/'>technology section</a>
                    </div>
                    <div className={classes.card}>
                      <Heading size='small'>{String(t('evsearch.interface'))}</Heading>
                      <Checkbox
                        checked={initSearch.headUpDisplay}
                        label='Head Up Display'
                        onChange={handleHeadUpDisplayChange}
                        compact={true}
                      ></Checkbox>
                      <br></br>
                      <Checkbox
                        checked={initSearch.instrumentCluster}
                        label='Dedicated Instrument Cluster'
                        onChange={handleInstrumentClusterChange}
                        compact={true}
                      ></Checkbox>
                      <br></br>
                      <Checkbox
                        checked={initSearch.androidAuto}
                        label='Android Auto Support'
                        onChange={handleAndroidAutoChange}
                        compact={true}
                      ></Checkbox>
                      <br></br>
                      <Checkbox
                        checked={initSearch.appleCarPlay}
                        label='Apple Car Play Support'
                        onChange={handleAppleCarPlayChange}
                        compact={true}
                      ></Checkbox>
                    </div>
                    <div className={classes.card}>
                      <Heading size='small'>{String(t('evsearch.battery'))}</Heading>
                      <Checkbox
                        checked={initSearch.lfpChemistry}
                        label='LFP Chemistry'
                        onChange={handleLfpChemistryChange}
                        compact={true}
                      ></Checkbox>
                      <br></br>
                      <Checkbox
                        checked={initSearch.batteryHeatingManual}
                        label='Manual battery heating'
                        onChange={handleBatteryHeatingManualChange}
                        compact={true}
                      ></Checkbox>
                      <br></br>
                      <Checkbox
                        checked={initSearch.batteryHeatingNavigation}
                        label='Battery heating when navigating to charger'
                        onChange={handleBatteryHeatingNavigationChange}
                        compact={true}
                      ></Checkbox>
                      <br></br>
                      Read more about EV batteries in our{' '}
                      <a href='../technology/battery/'>technology section</a>
                    </div>
                    <div className={classes.card}>
                      <Heading size='small'>{String(t('evsearch.seats'))}</Heading>
                      <Checkbox
                        checked={initSearch.firstRowSeatsHeating}
                        label='First row seat Heating'
                        onChange={handleFirstRowSeatsHeatingChange}
                        compact={true}
                      ></Checkbox>
                      <br></br>
                      <Checkbox
                        checked={initSearch.firstRowSeatsVentilation}
                        label='First row seat ventilation'
                        onChange={handleFirstRowSeatsVentilationChange}
                        compact={true}
                      ></Checkbox>
                      <br></br>
                      <Checkbox
                        checked={initSearch.firstRowSeatsMassage}
                        label='First row seat massage'
                        onChange={handleFirstRowSeatsMassageChange}
                        compact={true}
                      ></Checkbox>
                      <br></br>
                      <Checkbox
                        checked={initSearch.firstRowAdjustableThighSupport}
                        label='First row adjustable thigh support'
                        onChange={handleFirstRowAdjustableThighSupportChange}
                        compact={true}
                      ></Checkbox>
                      <br></br>
                      <Checkbox
                        checked={initSearch.secondRowSeatsHeating}
                        label='Second row seat Heating'
                        onChange={handleSecondRowSeatsHeatingChange}
                        compact={true}
                      ></Checkbox>
                      <br></br>
                      <Checkbox
                        checked={initSearch.secondRowSeatsVentilation}
                        label='Second row seat ventilation'
                        onChange={handleSecondRowSeatsVentilationChange}
                        compact={true}
                      ></Checkbox>
                      <br></br>
                      <Checkbox
                        checked={initSearch.secondRowSeatsMassage}
                        label='Second row seat massage'
                        onChange={handleSecondRowSeatsMassageChange}
                        compact={true}
                      ></Checkbox>
                      <br></br>
                      <Checkbox
                        checked={initSearch.secondRowRecline}
                        label='Second row recline'
                        onChange={handleSecondRowReclineChange}
                        compact={true}
                      ></Checkbox>
                      <br></br>
                      <Checkbox
                        checked={initSearch.secondRowExecutiveSeat}
                        label='Second row executive seat'
                        onChange={handleSecondRowExecutiveSeatChange}
                        compact={true}
                      ></Checkbox>
                    </div>
                  </div>
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
              ]}
            ></Select>
          </div>
          <div className={classes.pageContentAccordionsContainer}>
            <div className={classes.apiAccordions}>
              <h4 className={classes.resultInfo}>
                {evsearchCount} {t('evsearch.searchresult')}:
              </h4>
              <div className={classes.accordionScrollContainer}>{delegableApiAccordions()}</div>
            </div>
          </div>
        </PageContent>
      </Page>
    </PageContainer>
  );
};
