import consentsSlice, { selectConsents } from './consentsSlice';

describe('newConsentSlice', () => {
  test('should handle initial state', () => {
    expect(consentsSlice(undefined, {})).toEqual([
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
    ]);
  });

  test('selectConsents', () => {
    expect(selectConsents({ consents: [{ id: 1, text: 'Random '}] })).toEqual([{ id: 1, text: 'Random '}]);
  })
});