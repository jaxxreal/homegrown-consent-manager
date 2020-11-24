import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { ConsentSelectForm } from './ConsentSelectForm';

describe('ConsentSelectForm', () => {
  test('ConsentSelectForm renders consents', () => {
    const consents = [
      {
        id: 1,
        text: 'Consent 1',
      },
      {
        id: 2,
        text: 'Consent 2',
      },
    ];

    const { getByText, getByTestId } = render(<ConsentSelectForm selectedConsents={[]} consents={consents} />);

    function getCheckbox(testId) {
      return getByTestId(testId).querySelector('input[type="checkbox"]');
    }

    expect(getByText('Consent 1')).toBeInTheDocument();
    expect(getByText('Consent 2')).toBeInTheDocument();

    expect(getCheckbox('consent-checkbox-1')).toHaveProperty('checked', false);
    expect(getCheckbox('consent-checkbox-2')).toHaveProperty('checked', false);
  });

  test('ConsentSelectForm renders selected consents', () => {
    const consents = [
      {
        id: 1,
        text: 'Consent 1',
      },
      {
        id: 2,
        text: 'Consent 2',
      },
    ];

    const selectedConsents = [
      {
        id: 2,
        text: 'Consent 2',
      },
    ];

    const { getByText, getByTestId } = render(<ConsentSelectForm selectedConsents={selectedConsents} consents={consents} />);

    function getCheckbox(testId) {
      return getByTestId(testId).querySelector('input[type="checkbox"]');
    }

    expect(getByText('Consent 1')).toBeInTheDocument();
    expect(getByText('Consent 2')).toBeInTheDocument();

    expect(getCheckbox('consent-checkbox-2')).toHaveProperty('checked', true);
  });

  test('ConsentSelectForm calls callback', () => {
    const consents = [
      {
        id: 1,
        text: 'Consent 1',
      },
      {
        id: 2,
        text: 'Consent 2',
      },
    ];
    const selectedConsents = [];
    const toggleConsent = jest.fn();

    const { getByText, getByTestId } = render(<ConsentSelectForm
      selectedConsents={selectedConsents}
      consents={consents}
      toggleConsent={toggleConsent}
    />);

    function getCheckbox(testId) {
      return getByTestId(testId).querySelector('input[type="checkbox"]');
    }

    expect(getByText('Consent 1')).toBeInTheDocument();
    expect(getByText('Consent 2')).toBeInTheDocument();

    const checkbox = getCheckbox('consent-checkbox-1');
    fireEvent.click(checkbox, { target: { checked: true } });

    expect(toggleConsent.mock.calls.length).toBe(1);
    expect(toggleConsent.mock.calls[0][0]).toBe(consents[0]);
  });
});