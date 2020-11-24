import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ConsentForm } from './ConsentForm';
import { ConsentSelect } from './ConsentSelect';
import {
  selectNewConsent,
  selectConsentGivenState,
  setName,
  setEmail,
} from './newConsentSlice';

export default function NewConsent() {
  const dispatch = useDispatch();
  const consent = useSelector(selectNewConsent);
  const isConsentGiven = useSelector(selectConsentGivenState);

  function handleSubmit() {

  }

  return (
    <div>
        <h1>New Consent</h1>
        <ConsentForm
          name={consent.name}
          email={consent.email}
          newsletter={consent.newsletter}
          targetedAds={consent.targetedAds}
          visitStatistic={consent.visitStatistic}
          setName={name => dispatch(setName(name))}
          setEmail={email => dispatch(setEmail(email))}
          consentSelect={<ConsentSelect />}
          isFormValid={isConsentGiven}
          onSubmit={handleSubmit}
        />
    </div>
  );
}
