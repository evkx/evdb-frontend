import { Page, Panel, PanelVariant, PageContent } from '@altinn/altinn-design-system';
import type { SingleSelectOption } from '@digdir/design-system-react';
import {
  CheckboxGroup,
  CheckboxGroupVariant,
  Select,
  Tabs,
  Checkbox,
} from '@digdir/design-system-react';
import type { Key } from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
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
  const brandsResult = useAppSelector((state) => state.evsearchResult.searchOptions.brands);
  const bodyTypesResult = useAppSelector((state) => state.evsearchResult.searchOptions.bodyTypes);
  const colorResult = useAppSelector((state) => state.evsearchResult.searchOptions.colors);
  const seatConfigResult = useAppSelector(
    (state) => state.evsearchResult.searchOptions.seatConfiguration,
  );

  const initSearch = useAppSelector((state) => state.evsearchResult.search);
  const fetchData = async (evSearch: EvSearch) => await dispatch(fetchEvs(evSearch));

  const error = useAppSelector((state) => state.evsearchResult.error);

  useEffect(() => {
    if (loading) {
      void fetchData(initSearch);
      void fetchSearchOptionData();
    }
  }, []);

  useEffect(() => {
    void fetchData(initSearch);
  }, [initSearch]);

  const handleSortOrderChange = (filterList: string) => {
    dispatch(updateSortOrder(filterList));
  };

  const handleBrandChange = (filterList: string[]) => {
    dispatch(updateBrands(filterList));
  };

  const filterOptions: SingleSelectOption[] = brandsResult.map((provider: string) => ({
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
    const isChecked = event.target.checked;
    dispatch(updateAllWheelDrive(isChecked));
  };

  const handleNightVisionChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const isChecked = event.target.checked;
    dispatch(updateNightVision(isChecked));
  };

  const handleAdaptiveSuspensionChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const isChecked = event.target.checked;
    dispatch(updateAdaptiveDamping(isChecked));
  };
  const handleInstrumentClusterChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const isChecked = event.target.checked;
    dispatch(updateInstrumentCluster(isChecked));
  };
  const handleHeadUpDisplayChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const isChecked = event.target.checked;
    dispatch(updateHeadUpDisplay(isChecked));
  };
  const handleAppleCarPlayChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const isChecked = event.target.checked;
    dispatch(updateAppleCarPlay(isChecked));
  };
  const handleAndroidAutoChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const isChecked = event.target.checked;
    dispatch(updateAndroidAuto(isChecked));
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
      return t('evsearch.loading') + '...';
    }
    return evsearchresult.map((ev: Ev, index: Key | null | undefined) => {
      return (
        <EvSearchAccordion
          title={ev.name}
          subtitle={ev.sortValue + ' ' + ev.sortParameter}
          key={index}
          topContentText={ev.infoUri}
          maxPower={ev.maxPowerKw}
          topSpeedKph={ev.topSpeedKph}
          infoUri={ev.infoUri}
          wltpConsumption={ev.wltpConsumption}
          wltpRange={ev.wltpRange}
          netBattery={ev.netBattery}
          zeroTo100={ev.zeroTo100}
          thumbUri={ev.thumbUri}
        ></EvSearchAccordion>
      );
    });
  };

  return (
    <PageContainer>
      <Page>
        <PageContent>
          <div className={classes.pageContent}>
            <Select
              label={String(t('evsearch.sortorder'))}
              multiple={false}
              onChange={handleSortOrderChange}
              options={[
                { label: String(t('evsearch.sortorderbrand')), value: '1' },
                { label: String(t('evsearch.sortorderrange')), value: '2' },
                { label: String(t('evsearch.sortordernetsize')), value: '3' },
                { label: String(t('evsearch.sortordernetsizedesc')), value: '4' },
                { label: 'WLTP forbruk minium spesifikasjon', value: '5' },
                { label: 'Power more > less', value: '6' },
                { label: 'Top speed more >less', value: '7' },
                { label: 'Max DC Charging', value: '8' },
                { label: 'Nominal voltage', value: '9' },
                { label: '0-100kph', value: '10' },
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
                      <br></br>
                      <Checkbox
                        checked={initSearch.adaptiveSuspension}
                        label='Adaptive Suspension'
                        onChange={handleAdaptiveSuspensionChange}
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
