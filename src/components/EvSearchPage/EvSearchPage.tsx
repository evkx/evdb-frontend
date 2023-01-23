import {
  Page,
  Panel,
  PanelVariant,
  PageHeader,
  PageContent,
  CheckboxGroup,
  CheckboxGroupVariant,
  Select,
} from '@altinn/altinn-design-system';
import type { MultiSelectOption, SingleSelectOption } from '@altinn/altinn-design-system';
import type { Key } from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import * as React from 'react';

import { ReactComponent as CarIcon } from '@/assets/Car.svg';
import type { Ev, EvSearch } from '@/rtk/features/evSearch/evsearchSlice';
import {
  fetchEvs,
  fetchBrands,
  updateSortOrder,
  updateEvType,
  updateBrands,
} from '@/rtk/features/evSearch/evsearchSlice';
import { useAppDispatch, useAppSelector } from '@/rtk/app/hooks';

import { EvSearchAccordion } from '../Reusables/EvSearchAccordion';

import classes from './EvSearchPage.module.css';

export enum EvBodyTypes {
  Sedan = 'Sedan',
  Coupe = 'Coupe',
  Hatchback = 'Hatchback',
  Sport = 'Sport',
  StationWagon = 'StationWagon',
  SUV = 'SUV',
  CoupeSUV = 'CoupeSUV',
  Convertible = 'Convertible',
  Minivan = 'Minivan',
  PickupTruck = 'PickupTruck',
  Crossover = 'Crossover',
  Roadster = 'Roadster',
  MPV = 'MPV',
}

export const EvSearchPage = () => {
  const { t } = useTranslation('common');
  const loading = useAppSelector((state) => state.evsearchResult.loading);
  const evsearchresult = useAppSelector((state) => state.evsearchResult.evList.evs);
  const brandsResult = useAppSelector((state) => state.evsearchResult.brands);
  const dispatch = useAppDispatch();

  const initSearch = useAppSelector((state) => state.evsearchResult.search);
  const fetchData = async (evSearch: EvSearch) => await dispatch(fetchEvs(evSearch));
  const fetchBrandData = async () => await dispatch(fetchBrands());

  const error = useAppSelector((state) => state.evsearchResult.error);

  useEffect(() => {
    if (loading) {
      void fetchData(initSearch);
      void fetchBrandData();
    }
  }, []);

  const handleSortOrderChange = (filterList: string) => {
    dispatch(updateSortOrder(filterList));
    const newSearch: EvSearch = {
      evType: initSearch.evType,
      sortOrder: parseInt(filterList),
      name: initSearch.name,
      brands: initSearch.brands,
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
    };
    void fetchData(newSearch);
  };

  const evBodyTypeKeys = Object.keys(EvBodyTypes);

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
              items={evBodyTypeKeys.map((key) => ({
                label: key,
                name: key,
                checked: initSearch.evType === undefined || initSearch.evType.includes(key),
              }))}
            ></CheckboxGroup>
            <br></br>

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
