import '@digdir/designsystemet-css';
import { List, ListItem } from '@digdir/designsystemet-react';
import '@digdir/designsystemet-theme/brand/digdir/tokens.css';
import { useState } from 'react';
import { Button } from '@digdir/designsystemet-react';
import { PlusCircleIcon, ArrowUndoIcon } from '@navikt/aksel-icons';
import { t } from 'i18next';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from '@/rtk/app/hooks';
import classes from './EvSearchActionBar.module.css';
import { ActionBar, ActionBarProps } from '@/components/ActionBar';

export enum EvSearchActionBarButtonType {
  Add = 'add',
  Remove = 'remove',
}

export interface EvSearchActionBarProps extends Pick<ActionBarProps, 'subtitle' | 'title' | 'children'> {
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
  status: string;

  /** The callback function to be called when the add button is pressed. */
  onAddClick?: () => void;

  /** The callback function to be called when the remove button is pressed. */
  onRemoveClick?: () => void;

  /** Shows details about why the service isn't delegable */
  errorText?: string | undefined;

  /** When true saves as much space as possible. Usually true for smaller screens */
  compact?: boolean;
}

export const EvSearchActionBar = ({
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
  onAddClick,
  onRemoveClick,
  compact = false,
  status = ''
}: EvSearchActionBarProps) => {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

  const compareList = useAppSelector((state) => state.evsearchResult.compareList);

  
  const addButton = (
    <Button
      variant={'tertiary'}
      size={compact ? 'large' : 'medium'}
      onClick={onAddClick}
      iconPlacement='right'
    >
      <PlusCircleIcon title='add' />
      {!compact && t('evsearch.compare')}
    </Button>
  );

  const removeButton = (
    <Button
      variant={'tertiary'}
      size={compact ? 'large' : 'medium'}
      onClick={onRemoveClick}
      iconPlacement='right'
    >
      <ArrowUndoIcon title={t('common.undo')} />
      {!compact && t('evsearch.removecompare')}
    </Button>
  );

  const action = () => {
    if (status === 'Compared') {
      return removeButton;
     } else {
      return addButton;
    }
  };

  return (
    <div className={classes.actionbar}>
      <ActionBar
        subtitle={subtitle}
        title={title}
        color='light'
        actions={action()}
        open={open}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className={classes.content}>
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
                    <List.Root size='small'>
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
                    </List.Root>
                  </div>
                </div>
              </div>
        </div>
      </ActionBar>
    </div>
  );
};
