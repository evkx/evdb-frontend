import {
  Page,
  PageHeader,
  PageContent,
  Button,
  ButtonVariant,
  ButtonColor,
  CheckboxGroup,
  CheckboxGroupVariant,
} from '@altinn/altinn-design-system';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import { ReactComponent as ApiIcon } from '@/assets/Settings.svg';
import { ReactComponent as Cancel } from '@/assets/Cancel.svg';
import type { EvSearchResult } from '@/rtk/features/evSearch/evsearchSlice';
import { fetchEvs } from '@/rtk/features/evSearch/evsearchSlice';
import { useAppDispatch, useAppSelector } from '@/rtk/app/hooks';

import classes from './EvSearchPage.module.css';

export const EvSearchPage = () => {
  const { t } = useTranslation('common');
  const loading = useAppSelector((state) => state.delegableApi.loading);
  const dispatch = useAppDispatch();
  const fetchData = async () => await dispatch(fetchEvs());

  useEffect(() => {
    if (loading) {
      void fetchData();
    }
  }, []);

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
        </PageContent>
      </Page>
    </div>
  );
};
