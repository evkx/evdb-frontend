import { Accordion, AccordionHeader, AccordionContent } from '@digdir/design-system-react';
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
            {maxPower && (
              <div>
                <p className={classes.scopeText}>{t('evsearch.specifications')}</p>
                <div className={classes.line}>
                  <Line />
                </div>
                <div className={classes.contentTexts}>
                  {t('evsearch.topspeed')}
                  {topSpeedKph}
                  <br></br>
                  {t('evsearch.maxpower')}
                  {maxPower}
                </div>
              </div>
            )}
          </div>
        </AccordionContent>
      </Accordion>
    </div>
  );
};
