import {
  Accordion,
  AccordionHeader,
  AccordionContent,
  ButtonVariant,
  ButtonColor,
  Button,
} from '@altinn/altinn-design-system';
import { useState } from 'react';
import { t } from 'i18next';
import * as React from 'react';

import { ReactComponent as MinusCircle } from '@/assets/MinusCircle.svg';
import { ReactComponent as AddCircle } from '@/assets/AddCircle.svg';

import { Line } from '../Line/Line';

import classes from './EvSearchAccordion.module.css';

export enum EvSearchAccordionButtonType {
  Add = 'add',
  Remove = 'remove',
}

export interface EvSearchAccordionProps {
  title?: string;
  subtitle?: string;
  topContentText?: string;
  textList?: string[];
}

export const EvSearchAccordion = ({
  title = 'No info',
  subtitle = 'No info',
  topContentText,
  textList = [''],
}: EvSearchAccordionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Accordion
        open={open}
        onClick={() => setOpen(!open)}
      >
        <AccordionHeader subtitle={subtitle}>{title}</AccordionHeader>
        <AccordionContent>
          <div className={classes.newApiAccordionContent}>
            {textList.length > 0 && (
              <div>
                <p className={classes.scopeText}>{t('api_delegation.scopes')}:</p>
                {textList.map((scope, i) => {
                  return (
                    <div
                      key={i}
                      className={classes.scopeItems}
                    >
                      {scope}
                    </div>
                  );
                })}
              </div>
            )}
            {topContentText && (
              <div>
                <div className={classes.line}>
                  <Line />
                </div>
                <p className={classes.scopeText}>{t('api_delegation.description')}</p>
                <div className={classes.contentTexts}>{topContentText}</div>
              </div>
            )}
            {topContentText === undefined && (
              <div className={classes.contentTexts}>
                {t('api_delegation.data_retrieval_failed')}
              </div>
            )}
          </div>
        </AccordionContent>
      </Accordion>
    </div>
  );
};
