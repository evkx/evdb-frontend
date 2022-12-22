import {
  Page,
  PageHeader,
  PageContent,
  Button,
  ButtonVariant,
  ButtonColor,
} from '@altinn/altinn-design-system';
import { useTranslation } from 'react-i18next';

import { ReactComponent as ApiIcon } from '@/assets/Settings.svg';
import { ReactComponent as Cancel } from '@/assets/Cancel.svg';

import classes from './EvSearchPage.module.css';

export const EvSearchPage = () => {
  const { t } = useTranslation('common');

  return (
    <div className={classes.page}>
      <Page>
        <PageHeader icon={<ApiIcon />}>{t('api_delegation.api_delegations')}</PageHeader>
        <PageContent>
          <div className={classes.pageContent}>
            <Button
              variant={ButtonVariant.Quiet}
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
