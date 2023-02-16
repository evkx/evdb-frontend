import {
  Accordion,
  AccordionHeader,
  AccordionContent,
  HelpText,
  HelpTextSize,
  List,
  ListItem,
  FieldSet,
} from '@digdir/design-system-react';
import { useState } from 'react';
import { t } from 'i18next';
import * as React from 'react';

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
  infoUri?: string;
  netBattery?: number;
  wltpConsumption?: number;
  wltpRange?: number;
  zeroTo100?: number;
  thumbUri?: string;
}

export const EvSearchAccordion = ({
  title = 'No info',
  subtitle = 'No info',
  topContentText,
  textList = [''],
  maxPower = 0,
  topSpeedKph = 0,
  infoUri = '',
  netBattery = 0,
  wltpConsumption = 0,
  wltpRange = 0,
  zeroTo100 = 0,
  thumbUri = '',
}: EvSearchAccordionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Accordion
        open={open}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <AccordionHeader subtitle={subtitle}>{title}</AccordionHeader>
        <AccordionContent>
          <div className={classes.evsearchAccordionContent}>
            <div>
              <div>
                <div>
                  <img
                    src={thumbUri}
                    alt={title}
                    className={classes.thumb}
                  ></img>
                </div>
                <div>
                  Read our <a href={infoUri}>full article</a>, see all{' '}
                  <a href={infoUri + 'specifications/'}>specifications</a>, or see
                  <a href={infoUri + 'gallery/'}>image gallery</a>.
                </div>
              </div>
              <FieldSet legend={t('evsearch.specificationshiglihts')}>
                <List borderStyle='dashed'>
                  <ListItem>
                    <b>{t('evsearch.specwltprange')}</b> - {wltpRange} km
                  </ListItem>
                  <ListItem>
                    <b>{t('evsearch.specwltpconsumption')}</b> - {wltpConsumption} kWh/100km
                  </ListItem>
                  <ListItem>
                    <b>{t('evsearch.specnetbattery')}</b> - {netBattery} kWh
                  </ListItem>
                  <ListItem>
                    <b>{t('evsearch.zeroto100')}</b> - {zeroTo100} seconds
                  </ListItem>
                  <ListItem>
                    <b>{t('evsearch.topspeed')}</b>- {topSpeedKph} km/h
                  </ListItem>
                  <ListItem>
                    <b>{t('evsearch.maxpower')}</b> - {maxPower} kW
                  </ListItem>
                </List>
              </FieldSet>
            </div>
          </div>
        </AccordionContent>
      </Accordion>
    </div>
  );
};
