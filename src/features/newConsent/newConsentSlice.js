import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'newConsent',
  initialState: {
    name: '',
    email: '',
    givenConsents: []
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    toggleConsent(state, action) {
      const idx = state.givenConsents.findIndex(v => v.id === action.payload.id)

      if (idx === -1) {
        state.givenConsents.push(action.payload);
      } else {
        state.givenConsents.splice(idx, 1);
      }
    }
  },
});

export const {
  setName,
  setEmail,
  toggleConsent,
} = slice.actions;

export const selectNewConsent = state => state.newConsent;

export const selectGivenConsents = state => state.newConsent.givenConsents;

export const selectConsentGivenState = state => state.newConsent.givenConsents.length !== 0;

export default slice.reducer;