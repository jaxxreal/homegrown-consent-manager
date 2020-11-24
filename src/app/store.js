import { configureStore } from '@reduxjs/toolkit';
import newConsentReducer from '../features/newConsent/newConsentSlice';
import consentsListReducer from '../features/consentList/consentListSlice';
import consentsReducer from '../features/consents/consentsSlice';

export default configureStore({
  reducer: {
    newConsent: newConsentReducer,
    consentList: consentsListReducer,
    consents: consentsReducer,
  },
});
