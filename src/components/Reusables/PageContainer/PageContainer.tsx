import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './PageContainer.module.css';

export interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation('common');

  return (
    <div className={classes.pageContainer}>
      <div>{children}</div>
    </div>
  );
};
