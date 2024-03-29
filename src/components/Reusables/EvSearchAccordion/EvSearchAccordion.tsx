import { Accordion, Checkbox, List, ListItem } from '@digdir/design-system-react';
import '@digdir/design-system-tokens/brand/digdir/tokens.css';
import { useState } from 'react';
import { t } from 'i18next';
import * as React from 'react';
import {
  updateCompareList
} from '@/rtk/features/evSearch/evsearchSlice';
import { useAppDispatch, useAppSelector } from '@/rtk/app/hooks';
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
  evid?: string;
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
  evid = '',
}: EvSearchAccordionProps) => {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

  const compareList = useAppSelector((state) => state.evsearchResult.compareList);

  const handleCompareEvChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if(event.target.checked)
    {
      const updatedCompareList = [...compareList, event.target.value];
      dispatch(updateCompareList(updatedCompareList));
    }
    else
    {
      const updatedCompareList = compareList.filter(element => element !== event.target.value);
      dispatch(updateCompareList(updatedCompareList));
    }

  };

  return (
    <div>
      <Accordion
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Accordion.Item>
          <Accordion.Header>
            {title}{' '}
            <b>
              <i>{subtitle}</i>
            </b>
          </Accordion.Header>
          <Accordion.Content>
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
                  <a href={infoUri + 'specifications/'}>specifications</a>, see our{' '}
                  <a href={infoUri + 'gallery/'}>image gallery</a>, see all <a href={infoUri + 'rangeandconsumption/'}>range info</a> or <a href={infoUri + 'chargingcurve/'}>full charging info</a>.<br></br>
                  
                  <Checkbox
                            children='Compare'
                            onChange={handleCompareEvChange}
                            size='xsmall'
                            value={evid}
                          ></Checkbox>
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
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
