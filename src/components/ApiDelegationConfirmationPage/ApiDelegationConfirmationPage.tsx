import { Button, ButtonVariant, ButtonColor, ButtonSize } from '@altinn/altinn-design-system';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '@/rtk/app/hooks';

import { ReactComponent as ApiIcon } from '../../assets/ShakeHands.svg';
import { CompactDeletableListItem } from '../Common/CompactDeletableListItem';
import { ConfirmationPage } from '../Common/ConfirmationPage';

import classes from './ApiDelegationConfirmationPage.module.css';

export const ApiDelegationConfirmationPage = () => {
  const chosenApis = useAppSelector((state) => state.delegableApi.chosenDelegableApiList);
  const chosenOrgs = useAppSelector((state) => state.delegableOrg.chosenDelegableOrgList);
  const { t } = useTranslation('common');
  const navigate = useNavigate();

  return (
    <ConfirmationPage
      firstListItems={chosenApis}
      secondListItems={chosenOrgs}
      headerText={t('api_delegation.give_access_to_new_api')}
      firstContentText={t('api_delegation.confirmation_page_content_top_text')}
      secondContentText={t('api_delegation.confirmation_page_content_second_text')}
      bottomText={t('api_delegation.confirmation_page_content_bottom_text')}
      mainButton={
        <Button
          color={ButtonColor.Success}
          variant={ButtonVariant.Filled}
          size={ButtonSize.Small}
          onClick={() => navigate('/api-delegations/receipt')}
        >
          {t('api_delegation.confirm_delegation')}
        </Button>
      }
      complementaryButton={
        <Button
          color={ButtonColor.Primary}
          variant={ButtonVariant.Outline}
          size={ButtonSize.Small}
          onClick={() => navigate('/api-delegations/new-api')}
        >
          {t('api_delegation.previous')}
        </Button>
      }
      headerIcon={<ApiIcon />}
    />
  );
};
