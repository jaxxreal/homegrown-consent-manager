import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { ConsentForm } from './ConsentForm';

describe('ConsentForm', () => {
  test('ConsentForm exist', () => {
    expect(ConsentForm).toBeTruthy();
  });
  
  test('ConsentForm renders supposed UI', () => {
    const { getByText, getByLabelText } = render(<ConsentForm consentSelect={<span>Consent Select Form</span>} />);
  
    expect(getByText(/Consent Select Form/i)).toBeInTheDocument();
  
    expect(getByLabelText('Email address')).toBeInTheDocument();
    expect(getByLabelText('Name')).toBeInTheDocument();
    expect(getByText('Give consent')).toBeInTheDocument();
  });
  
  test('ConsentForm submit button is disabled when form is invalid', () => {
    const { getByTestId, rerender } = render(<ConsentForm isFormValid={false} />);
  
    const btnEl = getByTestId('consent-submit-button');
    expect(btnEl).toBeInTheDocument();
    expect(btnEl.disabled).toBeTruthy();
  
    rerender(<ConsentForm isFormValid={true} />);
  
    expect(getByTestId('consent-submit-button')).toBeInTheDocument();
    expect(getByTestId('consent-submit-button').disabled).toBeFalsy();
  });
  
  test('ConsentForm display name properly', () => {
    const { rerender, getByLabelText } = render(<ConsentForm name="Bob" />);
  
    expect(getByLabelText('Name')).toBeInTheDocument();
    expect(getByLabelText('Name').value).toBe('Bob');
  
    rerender(<ConsentForm name="Marie" />);
    expect(getByLabelText('Name').value).toBe('Marie');
  });

  test('ConsentForm display email properly', () => {
    const { rerender, getByLabelText } = render(<ConsentForm email="Bob@gmail.com" />);
  
    expect(getByLabelText('Email address')).toBeInTheDocument();
    expect(getByLabelText('Email address').value).toBe('Bob@gmail.com');
  
    rerender(<ConsentForm email="marie@gmail.com" />);
    expect(getByLabelText('Email address').value).toBe('marie@gmail.com');
  });

  //   expect(getCheckbox('targeted-ads')).toHaveProperty('checked', false);
  //   expect(getCheckbox('anonymous-visit-statistic')).toHaveProperty('checked', true);

  //   rerender(<ConsentForm
  //     newsletter={false}
  //     targetedAds={true}
  //     visitStatistic={false} />);

  //   expect(getCheckbox('receive-newsletter')).toHaveProperty('checked', false);
  //   expect(getCheckbox('targeted-ads')).toHaveProperty('checked', true);
  //   expect(getCheckbox('anonymous-visit-statistic')).toHaveProperty('checked', false);
  // });

  test('ConsentForm calls callbacks properly', () => {
    const setName = jest.fn();
    const setEmail = jest.fn();
    const onSubmit = jest.fn();

    const { getByTestId } = render(<ConsentForm
      setName={setName}
      setEmail={setEmail}
      onSubmit={onSubmit}
      isFormValid={true}
    />);

    function getInput(testId) {
      return getByTestId(testId).querySelector('input');
    }

    // for some reasons it's hard to test mui Checkboxes
    // tests for them supposed to be here as well

    const nameInput = getInput('name-text-field');
    fireEvent.change(nameInput, { target: { value: 'Bob' } });
    expect(nameInput).toHaveProperty('value', 'Bob');
    expect(setName.mock.calls.length).toBe(1);

    fireEvent.change(nameInput, { target: { value: 'Bo' } });
    expect(nameInput).toHaveProperty('value', 'Bo');
    expect(setName.mock.calls.length).toBe(2);

    const emailInput = getInput('email-text-field');
    fireEvent.change(emailInput, { target: { value: 'Bob' } });
    expect(emailInput).toHaveProperty('value', 'Bob');
    expect(setEmail.mock.calls.length).toBe(1);

    fireEvent.change(emailInput, { target: { value: 'Bo' } });
    expect(emailInput).toHaveProperty('value', 'Bo');
    expect(setEmail.mock.calls.length).toBe(2);

    const form = getByTestId('consent-form');
    fireEvent.submit(form);
    expect(onSubmit.mock.calls.length).toBe(1);
  });
});
