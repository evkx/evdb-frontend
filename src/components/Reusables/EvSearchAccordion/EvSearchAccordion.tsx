import {
  LegacyAccordion,
  LegacyAccordionHeader,
  LegacyAccordionContent,
  List,
  ListItem,
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
  maxPower?: number;
  topSpeedKph?: number;
  infoUri?: string;
  netBattery?: number;
  wltpConsumption?: number;
  wltpRange?: number;
  zeroTo100?: number;
  thumbUri?: string;
  maxDcChargingSpeed?: number;
  averageDcChargingSpeed?: number;
}

export const EvSearchAccordion = ({
  title = 'No info',
  subtitle = 'No info',
  maxPower = 0,
  topSpeedKph = 0,
  infoUri = '',
  netBattery = 0,
  wltpConsumption = 0,
  wltpRange = 0,
  zeroTo100 = 0,
  thumbUri = '',
  maxDcChargingSpeed = 0,
  averageDcChargingSpeed = 0,
}: EvSearchAccordionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <LegacyAccordion
        open={open}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <LegacyAccordionHeader subtitle={subtitle}>{title}</LegacyAccordionHeader>
        <LegacyAccordionContent>
          <div className={classes.evsearchAccordionContent}>
            <div className={classes.cards}>
              <div className={classes.card}>
                <div className={classes.thumbcontainer}>
                  <img
                    src={thumbUri}
                    alt={title}
                    className={classes.thumb}
                  ></img>
                </div>
              </div>
              <div className={classes.card}>
                Read our <a href={infoUri}>full article</a>, see all{' '}
                <a href={infoUri + 'specifications/'}>specifications</a>, or see our{' '}
                <a href={infoUri + 'gallery/'}>image gallery</a>.<br></br>
                <br></br>
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
                  <ListItem>
                    <b>{t('evsearch.chargingspeed')}</b> - {maxDcChargingSpeed}/
                    {averageDcChargingSpeed} kW
                  </ListItem>
                </List>
              </div>
            </div>
          </div>
        </LegacyAccordionContent>
      </LegacyAccordion>
    </div>
  );
};
