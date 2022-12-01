import * as cypress from '@testing-library/cypress';
import { Provider } from 'react-redux';
import { mount } from 'cypress/react18';

import store from '@/rtk/app/store';
import { NewDelegationAccordion } from '@/components/Common/NewDelegationAccordion';
import type { DelegableOrg } from '@/rtk/features/delegableOrg/delegableOrgSlice';
import { NewDelegationAccordionButtonType } from '@/components/Common/NewDelegationAccordion/NewDelegationAccordion';

Cypress.Commands.add('mount', (component, options = {}) => {
  const { reduxStore = store, ...mountOptions } = options;

  const wrapped = <Provider store={reduxStore}>{component}</Provider>;

  return mount(wrapped, mountOptions);
});

describe('NewDelegationAccordion', () => {
  it('should do callback when button with label-text soft-add is clicked', () => {
    const delegableOrg: DelegableOrg = {
      id: '1',
      orgName: 'Skatteetaten',
      orgNr: '930124123',
      description: 'For å hente ut skatteklasser',
    };

    const callback = () => {
      cy.stub();
    };

    const callbackSpy = cy.spy(callback).as('callbackSpy');

    cy.mount(
      <NewDelegationAccordion
        title={delegableOrg.orgName}
        subtitle={delegableOrg.orgNr}
        hasOrgNr={true}
        description={delegableOrg.description}
        buttonType={NewDelegationAccordionButtonType.Add}
        callback={callbackSpy}
      ></NewDelegationAccordion>,
    );

    cy.findByLabelText(/soft-add/i).click();
    cy.get('@callbackSpy').should('have.been.called');
  });

  it('should do callback when button with label-text soft-remove is clicked', () => {
    const delegableOrg: DelegableOrg = {
      id: '1',
      orgName: 'Skatteetaten',
      orgNr: '930124123',
      description: 'For å hente ut skatteklasser',
    };

    const callback = () => {
      cy.stub();
    };

    const callbackSpy = cy.spy(callback).as('callbackSpy');

    cy.mount(
      <NewDelegationAccordion
        title={delegableOrg.orgName}
        subtitle={delegableOrg.orgNr}
        hasOrgNr={true}
        description={delegableOrg.description}
        buttonType={NewDelegationAccordionButtonType.Remove}
        callback={callbackSpy}
      ></NewDelegationAccordion>,
    );

    cy.findByLabelText(/soft-remove/i).click();
    cy.get('@callbackSpy').should('have.been.called');
  });
});