import {
  Page,
  Panel,
  PanelVariant,
  PageHeader,
  PageContent,
  Button,
  ButtonVariant,
  ButtonColor,
  CheckboxGroup,
  CheckboxGroupVariant,
  Select,
} from '@altinn/altinn-design-system';
import type { Key } from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import * as React from 'react';

import { ReactComponent as ApiIcon } from '@/assets/Settings.svg';
import { ReactComponent as Cancel } from '@/assets/Cancel.svg';
import type { Ev, EvSearch } from '@/rtk/features/evSearch/evsearchSlice';
import { fetchEvs, updateSortOrder } from '@/rtk/features/evSearch/evsearchSlice';
import { useAppDispatch, useAppSelector } from '@/rtk/app/hooks';
import { search } from '@/rtk/features/delegableApi/delegableApiSlice';

import { EvSearchAccordion } from '../Reusables/EvSearchAccordion';

import classes from './EvSearchPage.module.css';

export const EvSearchPage = () => {
  const { t } = useTranslation('common');
  const loading = useAppSelector((state) => state.evsearchResult.loading);
  const evsearchresult = useAppSelector((state) => state.evsearchResult.evList.evs);
  const dispatch = useAppDispatch();

  const fetchData = async (evSearch: EvSearch) => await dispatch(fetchEvs(evSearch));
  const error = useAppSelector((state) => state.evsearchResult.error);
  const initSearch = useAppSelector((state) => state.evsearchResult.search);

  useEffect(() => {
    if (loading) {
      void fetchData(initSearch);
    }
  }, []);

  const handleSortOrderChange = (filterList: string) => {
    dispatch(updateSortOrder(filterList));
    void fetchData(initSearch);
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
        <PageHeader icon={<ApiIcon />}>{t('evsearch.title')}</PageHeader>
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
            <br></br>
            <CheckboxGroup
              data-testid='evsearch-evtype'
              variant={CheckboxGroupVariant.Vertical}
              items={[
                { checked: false, label: 'SUV', name: 'suv' },
                { checked: false, label: 'Sedan', name: 'sedan' },
                { checked: false, label: 'CrossOver', name: 'crossover' },
                { checked: false, label: 'MPV', name: 'mpw' },
                { checked: false, label: 'Wagon', name: 'wagon' },
                { checked: false, label: 'Hatchback', name: 'hatchback' },
              ]}
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
