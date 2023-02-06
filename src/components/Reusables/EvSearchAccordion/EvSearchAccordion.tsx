import { Accordion, AccordionHeader, AccordionContent } from '@altinn/altinn-design-system';
import { useState } from 'react';
import { t } from 'i18next';
import * as React from 'react';

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
  maxPower?: number;
  topSpeedKph?: number;
}

export const EvSearchAccordion = ({
  title = 'No info',
  subtitle = 'No info',
  topContentText,
  textList = [''],
  maxPower = 0,
  topSpeedKph = 0,
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
            {maxPower && (
              <div>
                <div className={classes.line}>
                  <Line />
                </div>
                <p className={classes.scopeText}>{t('evsearch.specifications')}</p>
                <div className={classes.contentTexts}>
                  {t('evsearch.topspeed')}
                  {topSpeedKph}
                  <br></br>
                  {t('evsearch.maxpower')}
                  {maxPower}
                </div>
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
          </div>
        </AccordionContent>
      </Accordion>
    </div>
  );
};
