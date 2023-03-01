import { Page, Panel, PanelVariant, PageContent } from '@altinn/altinn-design-system';
import type { MultiSelectOption } from '@digdir/design-system-react';
import {
  CheckboxGroup,
  CheckboxGroupVariant,
  Select,
  Tabs,
  Checkbox,
  FieldSet,
  FieldSetProps,
  FieldSetSize,
  Spinner,
  SpinnerProps,
} from '@digdir/design-system-react';
import type { Key } from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import * as React from 'react';

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
} from '@/rtk/features/evSearch/evsearchSlice';
import type { Ev, EvSearch } from '@/rtk/features/evSearch/evsearchSlice';
import { useAppDispatch, useAppSelector } from '@/rtk/app/hooks';

import { PageContainer } from '../Reusables/PageContainer';
import { EvSearchAccordion } from '../Reusables/EvSearchAccordion';

import classes from './EvSearchPage.module.css';

export const EvSearchPage = () => {
  const { t } = useTranslation('common');
  const loading = useAppSelector((state) => state.evsearchResult.loading);

  const dispatch = useAppDispatch();

  const fetchSearchOptionData = async () => await dispatch(fetchSearchOptions());

  const evsearchresult = useAppSelector((state) => state.evsearchResult.evList.evs);
  const evsearchCount = useAppSelector((state) => state.evsearchResult.evList.count);
  const bodyTypesResult = useAppSelector((state) => state.evsearchResult.searchOptions.bodyTypes);
  const colorResult = useAppSelector((state) => state.evsearchResult.searchOptions.colors);
  const seatConfigResult = useAppSelector(
    (state) => state.evsearchResult.searchOptions.seatConfiguration,
  );

  const brandsResult = useAppSelector((state) => state.evsearchResult.searchOptions.brands);

  const initSearch = useAppSelector((state) => state.evsearchResult.search);
  const fetchData = async (evSearch: EvSearch) => await dispatch(fetchEvs(evSearch));

  const error = useAppSelector((state) => state.evsearchResult.error);

  useEffect(() => {
    if (loading) {
      void fetchSearchOptionData();
      void fetchData(initSearch);
    }
  }, []);

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

  const filterOptions: MultiSelectOption[] = brandsResult.map((provider: string) => ({
    label: provider,
    value: provider,
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
  const handleAndroidAutoChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateAndroidAuto(event.target.checked));
  };
  const handleColorChange = (names: string[]) => {
    dispatch(updateColors(names));
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
            <FieldSet
              legend='Welcome to EVKX EV Search'
              size={FieldSetSize.Small}
              className={classes.searchinfo}
              contentClassName={classes.searchinfoContent}
            >
              <p>
                EVKX offers the most comprehensive search for EVs.
                <br />
                You can search and sort on a whole lot of parameters. Please read our{' '}
                <a href='/guide/evsearch/'>search guide</a>
              </p>
            </FieldSet>
            <br />
            <Select
              label={String(t('evsearch.sortorder'))}
              multiple={false}
              onChange={handleSortOrderChange}
              options={[
                { label: String(t('evsearch.sortorderbrand')), value: '1' },
                { label: String(t('evsearch.specwltprange')), value: '2' },
                { label: String(t('evsearch.specwltpconsumption')), value: '5' },
                { label: String(t('evsearch.sortordernetsize')), value: '3' },
                { label: String(t('evsearch.sortordernetsizedesc')), value: '4' },
                { label: String(t('evsearch.maxpowersort')), value: '6' },
                { label: String(t('evsearch.topspeedsort')), value: '7' },
                { label: String(t('evsearch.maxdcchargingsort')), value: '8' },
                { label: String(t('evsearch.averagechargingspeed0100')), value: '15' },
                { label: String(t('evsearch.averagechargingspeed10100')), value: '16' },
                { label: String(t('evsearch.averagechargingspeed1080')), value: '17' },
                { label: String(t('evsearch.sort0100kmh')), value: '10' },
                { label: String(t('evsearch.sort1000kmdrivingtime')), value: '11' },
                { label: String(t('evsearch.sort1000kmaveragespeed')), value: '12' },
                { label: String(t('evsearch.travelspeedwltpcyclus')), value: '13' },
                { label: String(t('evsearch.travelspeed120kmh')), value: '14' },
                { label: String(t('evsearch.nominalvoltagesort')), value: '9' },
                { label: String(t('evsearch.trunksize')), value: '18' },
                { label: String(t('evsearch.maxtrunksize')), value: '19' },
                { label: String(t('evsearch.maxload')), value: '21' },
                { label: String(t('evsearch.maxtrailer')), value: '20' },
                { label: String(t('evsearch.maxgroundclearance')), value: '22' },
                { label: String(t('evsearch.mingroundclearance')), value: '23' },
                { label: String(t('evsearch.suspensionheightadjustment')), value: '24' },
              ]}
            ></Select>
            <Select
              label={String(t('evsearch.brandfilter'))}
              multiple={true}
              onChange={handleBrandChange}
              options={filterOptions}
            ></Select>
            <br></br>
            <CheckboxGroup
              data-testid='evsearch-evtype'
              variant={CheckboxGroupVariant.Horizontal}
              onChange={(values) => {
                handleTypeChange(values);
              }}
              compact={true}
              legend='Select body type'
              items={bodyTypesResult.map((key) => ({
                label: key,
                name: key,
                checked: initSearch.evType === undefined || initSearch.evType.includes(key),
              }))}
            ></CheckboxGroup>
            <br></br>

            <Tabs
              items={[
                {
                  content: (
                    <CheckboxGroup
                      data-testid='evsearch-seatconfig'
                      variant={CheckboxGroupVariant.Horizontal}
                      onChange={(values) => {
                        handleSeatConfigChange(values);
                      }}
                      compact={true}
                      legend='Number of seats'
                      items={seatConfigResult.map((key) => ({
                        label: key,
                        name: key,
                        checked:
                          initSearch.seatConfiguration === undefined ||
                          initSearch.seatConfiguration.includes(key),
                      }))}
                    ></CheckboxGroup>
                  ),
                  name: 'Seats',
                },
                {
                  content: (
                    <PageContent>
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
                    </PageContent>
                  ),
                  name: 'Drivetrain',
                },
                {
                  content: (
                    <Checkbox
                      checked={initSearch.nightVision}
                      label='Nightvision'
                      onChange={handleNightVisionChange}
                      compact={true}
                    ></Checkbox>
                  ),
                  name: 'Driver Assistance',
                },
                {
                  content: (
                    <CheckboxGroup
                      data-testid='evsearch-evtype'
                      variant={CheckboxGroupVariant.Horizontal}
                      onChange={(values) => {
                        handleColorChange(values);
                      }}
                      compact={true}
                      legend='Select paint color'
                      items={colorResult.map((key) => ({
                        label: key,
                        name: key,
                        checked: initSearch.colors === undefined || initSearch.colors.includes(key),
                      }))}
                    ></CheckboxGroup>
                  ),
                  name: 'Exterior',
                },
                {
                  content: (
                    <div>
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
                  ),
                  name: 'UI & Interface',
                },
              ]}
            />

            <br></br>
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
