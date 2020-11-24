import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ConsentSelectForm } from './ConsentSelectForm';
import { toggleConsent, selectGivenConsents } from './newConsentSlice';
import { selectConsents } from '../consents/consentsSlice';

export const ConsentSelect = () => {
  const dispatch = useDispatch();
  const consents = useSelector(selectConsents);
  const selectedConsents = useSelector(selectGivenConsents);

  return (
    <ConsentSelectForm
      consents={consents}
      selectedConsents={selectedConsents}
      toggleConsent={consent => dispatch(toggleConsent(consent))}
    />
  );
}
