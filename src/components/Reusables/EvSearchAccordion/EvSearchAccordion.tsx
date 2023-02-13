import {
  Accordion,
  AccordionHeader,
  AccordionContent,
  HelpText,
} from '@digdir/design-system-react';
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
  infoUri?: string;
  netBattery?: number;
  wltpConsumption?: number;
  wltpRange?: number;
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
          <div className={classes.evsearchAccordionContent}>
            {maxPower && (
              <div>
                <p className={classes.evText}>{t('evsearch.specifications')}</p>
                <div className={classes.line}>
                  <Line />
                </div>
                <div className={classes.contentTexts}>
                  <table>
                    <tr>
                      <td>{t('evsearch.topspeed')}</td>
                      <td> {topSpeedKph} km/h</td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          {t('evsearch.maxpower')}
                          <HelpText
                            title='Help'
                            placement='right'
                          >
                            Hallo
                          </HelpText>
                        </div>
                      </td>
                      <td>{maxPower} kW</td>
                    </tr>
                    <tr>
                      <td>WLTP range</td>
                      <td>{wltpRange} km</td>
                    </tr>
                    <tr>
                      <td>WLTP consumption</td>
                      <td>{wltpConsumption} kWh/100km</td>
                    </tr>
                    <tr>
                      <td>Usable battery</td>
                      <td>{netBattery} kWh</td>
                    </tr>
                  </table>

                  <br></br>
                  <a href={infoUri}>Read our full article</a>
                </div>
              </div>
            )}
          </div>
        </AccordionContent>
      </Accordion>
    </div>
  );
};
