import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'consents',
  initialState: [
    {
      id: 1,
      text: 'Receive newsletter'
    },
    {
      id: 2,
      text: 'Be shown targeted ads'
    },
    {
      id: 3,
      text: 'Contribute to anonymous visit statistic'
    },
  ],
});

export const selectConsents = state => {
  return state.consents;
};

export default slice.reducer;
