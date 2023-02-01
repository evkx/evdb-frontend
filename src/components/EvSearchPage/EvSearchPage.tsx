import { Page, Panel, PanelVariant, PageHeader, PageContent } from '@altinn/altinn-design-system';
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

import { ReactComponent as CarIcon } from '@/assets/Car.svg';
import type { Ev, EvSearch } from '@/rtk/features/evSearch/evsearchSlice';
import {
  fetchEvs,
  fetchSearchOptions,
  updateSortOrder,
  updateEvType,
  updateBrands,
  updateSeatConfig,
  updateAllWheelDrive,
} from '@/rtk/features/evSearch/evsearchSlice';
import { useAppDispatch, useAppSelector } from '@/rtk/app/hooks';

import { EvSearchAccordion } from '../Reusables/EvSearchAccordion';

import classes from './EvSearchPage.module.css';

export const EvSearchPage = () => {
  const { t } = useTranslation('common');
  const loading = useAppSelector((state) => state.evsearchResult.loading);

  const dispatch = useAppDispatch();

  const fetchSearchOptionData = async () => await dispatch(fetchSearchOptions());

  const evsearchresult = useAppSelector((state) => state.evsearchResult.evList.evs);
  const brandsResult = useAppSelector((state) => state.evsearchResult.searchOptions.brands);
  const bodyTypesResult = useAppSelector((state) => state.evsearchResult.searchOptions.bodyTypes);
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

  const handleSortOrderChange = (filterList: string) => {
    dispatch(updateSortOrder(filterList));
    const newSearch: EvSearch = {
      evType: initSearch.evType,
      sortOrder: parseInt(filterList),
      name: initSearch.name,
      brands: initSearch.brands,
      seatConfiguration: initSearch.seatConfiguration,
      seatVentilationFirstRow: initSearch.seatVentilationFirstRow,
      seatVentilationSecondRow: initSearch.seatVentilationSecondRow,
      seatMassageFirstRow: initSearch.seatMassageFirstRow,
      seatMassageSecondRow: initSearch.seatMassageSecondRow,
      allWheelDrive: initSearch.allWheelDrive,
    };
    void fetchData(newSearch);
  };

  const handleBrandChange = (filterList: string[]) => {
    dispatch(updateBrands(filterList));
    const newSearch: EvSearch = {
      evType: initSearch.evType,
      sortOrder: initSearch.sortOrder,
      name: initSearch.name,
      brands: filterList,
      seatConfiguration: initSearch.seatConfiguration,
      seatVentilationFirstRow: initSearch.seatVentilationFirstRow,
      seatVentilationSecondRow: initSearch.seatVentilationSecondRow,
      seatMassageFirstRow: initSearch.seatMassageFirstRow,
      seatMassageSecondRow: initSearch.seatMassageSecondRow,
      allWheelDrive: initSearch.allWheelDrive,
    };
    void fetchData(newSearch);
  };

  const filterOptions: SingleSelectOption[] = brandsResult.map((provider: string) => ({
    label: provider,
    value: provider,
  }));

  const handleTypeChange = (names: string[]) => {
    dispatch(updateEvType(names));

    const newSearch: EvSearch = {
      evType: names,
      sortOrder: initSearch.sortOrder,
      name: initSearch.name,
      brands: initSearch.brands,
      seatConfiguration: initSearch.seatConfiguration,
      seatVentilationFirstRow: initSearch.seatVentilationFirstRow,
      seatVentilationSecondRow: initSearch.seatVentilationSecondRow,
      seatMassageFirstRow: initSearch.seatMassageFirstRow,
      seatMassageSecondRow: initSearch.seatMassageSecondRow,
      allWheelDrive: initSearch.allWheelDrive,
    };
    void fetchData(newSearch);
  };

  const handleSeatConfigChange = (names: string[]) => {
    dispatch(updateSeatConfig(names));
    const newSearch: EvSearch = {
      evType: initSearch.evType,
      sortOrder: initSearch.sortOrder,
      name: initSearch.name,
      brands: initSearch.brands,
      seatConfiguration: names,
      seatVentilationFirstRow: initSearch.seatVentilationFirstRow,
      seatVentilationSecondRow: initSearch.seatVentilationSecondRow,
      seatMassageFirstRow: initSearch.seatMassageFirstRow,
      seatMassageSecondRow: initSearch.seatMassageSecondRow,
      allWheelDrive: initSearch.allWheelDrive,
    };
    void fetchData(newSearch);
  };

  const handleAllWheelDriveChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const isChecked = event.target.checked;
    dispatch(updateAllWheelDrive(isChecked));
    const newSearch: EvSearch = {
      evType: initSearch.evType,
      sortOrder: initSearch.sortOrder,
      name: initSearch.name,
      brands: initSearch.brands,
      seatConfiguration: initSearch.seatConfiguration,
      seatVentilationFirstRow: initSearch.seatVentilationFirstRow,
      seatVentilationSecondRow: initSearch.seatVentilationSecondRow,
      seatMassageFirstRow: initSearch.seatMassageFirstRow,
      seatMassageSecondRow: initSearch.seatMassageSecondRow,
      allWheelDrive: isChecked,
    };
    void fetchData(newSearch);
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
      return t('api_delegation.loading') + '...';
    }
    return evsearchresult.map((ev: Ev, index: Key | null | undefined) => {
      return (
        <EvSearchAccordion
          title={ev.name}
          subtitle={ev.sortValue + ' ' + ev.sortParameter}
          key={index}
          topContentText={ev.infoUri}
        ></EvSearchAccordion>
      );
    });
  };

  return (
    <div className={classes.page}>
      <Page>
        <PageHeader icon={<CarIcon />}>{t('evsearch.title')}</PageHeader>
        <PageContent>
          <div className={classes.pageContent}>
            <Select
              label='Sortering'
              multiple={false}
              onChange={handleSortOrderChange}
              options={[
                { label: 'Merke,model', value: '1' },
                { label: 'Rekkevidde WLTP minimum spesifikasjon', value: '2' },
                { label: 'Netto batterystørrelse minst-størst', value: '3' },
                { label: 'Netto batteristørrels størst-minst', value: '4' },
                { label: 'WLTP forbruk minium spesifikasjon', value: '5' },
              ]}
            ></Select>
            <Select
              label='Brands'
              multiple={true}
              onChange={handleBrandChange}
              options={filterOptions}
            ></Select>
            <br></br>
            <CheckboxGroup
              data-testid='evsearch-evtype'
              variant={CheckboxGroupVariant.Horizontal}
              onChange={(values) => handleTypeChange(values)}
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
                      onChange={(values) => handleSeatConfigChange(values)}
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
                    <Checkbox
                      checked={initSearch.allWheelDrive}
                      label='All wheel drive'
                      onChange={handleAllWheelDriveChange}
                      compact={true}
                    ></Checkbox>
                  ),
                  name: 'Drivetrain',
                },
                {
                  content: <h1>heisann</h1>,
                  name: 'Driver Assistance',
                },
                {
                  content: <h1>heisann</h1>,
                  name: 'Exterior',
                },
              ]}
            />

            <br></br>
          </div>
          <div className={classes.pageContentAccordionsContainer}>
            <div className={classes.apiAccordions}>
              <h4>{t('evsearch.searchresult')}:</h4>
              <div className={classes.accordionScrollContainer}>{delegableApiAccordions()}</div>
            </div>
          </div>
        </PageContent>
      </Page>
    </div>
  );
};
