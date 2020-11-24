import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'consentList',
  initialState: {
    consents: [],
    perpage: 2,
    currentPage: 0,
  },
  reducers: {
    addConsent(state, action) {
      state.consents.push(action.payload);
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    }
  },
});

export const {
  setCurrentPage,
  addConsent,
} = slice.actions;

export const selectConsents = state => {
  const { perpage, currentPage, consents } = state.consentList;
  const skipItems = currentPage * perpage;

  return consents.slice(skipItems, skipItems + perpage);
};

export const selectNumberOfPages = state => {
  const { perpage, consents } = state.consentList;

  return (consents.length - consents.length % perpage) / perpage;
};

export const selectCurrentPage = state => state.consentList.currentPage;

export default slice.reducer;
