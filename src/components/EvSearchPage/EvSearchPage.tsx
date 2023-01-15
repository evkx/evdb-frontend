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
} from '@altinn/altinn-design-system';
import type { Key } from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import * as React from 'react';

import { ReactComponent as ApiIcon } from '@/assets/Settings.svg';
import { ReactComponent as Cancel } from '@/assets/Cancel.svg';
import type { EvSearchResult } from '@/rtk/features/evSearch/evsearchSlice';
import { fetchEvs } from '@/rtk/features/evSearch/evsearchSlice';
import { useAppDispatch, useAppSelector } from '@/rtk/app/hooks';

import { EvSearchAccordion } from '../Reusables/EvSearchAccordion';

import classes from './EvSearchPage.module.css';

export const EvSearchPage = () => {
  const { t } = useTranslation('common');
  const loading = useAppSelector((state) => state.evsearchResult.loading);
  const evsearchresult = useAppSelector((state) => state.evsearchResult.evList);
  const dispatch = useAppDispatch();
  const fetchData = async () => await dispatch(fetchEvs());
  const error = useAppSelector((state) => state.evsearchResult.error);

  useEffect(() => {
    if (loading) {
      void fetchData();
    }
  }, []);

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
    return evsearchresult.map((api: EvSearchResult, index: Key | null | undefined) => {
      return (
        <EvSearchAccordion
          title={api.name}
          subtitle={api.sortParameter}
          key={index}
          topContentText={api.infoUri}
        ></EvSearchAccordion>
      );
    });
  };

  return (
    <div className={classes.page}>
      <Page>
        <PageHeader icon={<ApiIcon />}>{t('api_delegation.api_delegations')}</PageHeader>
        <PageContent>
          <div className={classes.pageContent}>
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
            <Button
              variant={ButtonVariant.Filled}
              color={ButtonColor.Secondary}
              icon={<Cancel />}
            >
              {t('api_delegation.undo')}
            </Button>
          </div>
          <div className={classes.pageContentAccordionsContainer}>
            <div className={classes.apiAccordions}>
              <h4>{t('api_delegation.delegable_apis')}:</h4>
              <div className={classes.accordionScrollContainer}>{delegableApiAccordions()}</div>
            </div>
          </div>
        </PageContent>
      </Page>
    </div>
  );
};