import newConsent, {
  setName,
  setEmail,
  toggleConsent,
  selectNewConsent,
  selectConsentGivenState,
  selectGivenConsents,
} from './newConsentSlice';

describe('newConsentSlice', () => {
  test('should handle initial state', () => {
    expect(newConsent(undefined, {})).toEqual({
      email: '',
      name: '',
      givenConsents: []
    });
  });
  
  test(`should handle ${setName.type}`, () => {
    expect(newConsent(undefined, {
      type: setName.type,
      payload: 'Bob'
    })).toEqual({email: '', name: 'Bob', givenConsents: []});
  });
  
  test(`should handle ${setEmail.type}`, () => {
    expect(newConsent(undefined, {
      type: setEmail.type,
      payload: 'gorgeous@gmail.com'
    })).toEqual({email: 'gorgeous@gmail.com', name: '', givenConsents: []});
  });
  
  test(`should handle ${toggleConsent.type}`, () => {
    expect(newConsent(undefined, {
      type: toggleConsent.type,
      payload: { id: 1, text: 'Random' }
    })).toEqual({email: '', name: '', givenConsents: [{ id: 1, text: 'Random' }]});

    expect(newConsent({email: '', name: '', givenConsents: [{ id: 1, text: 'Random' }]}, {
      type: toggleConsent.type,
      payload: { id: 1, text: 'Random' }
    })).toEqual({email: '', name: '', givenConsents: []});

    expect(newConsent({
      email: '',
      name: '',
      givenConsents: [{ id: 1, text: 'Random' }, { id: 2, text: 'Random' }]
    }, {
      type: toggleConsent.type,
      payload: { id: 1, text: 'Random' }
    })).toEqual({email: '', name: '', givenConsents: [{ id: 2, text: 'Random' }]});
  });

  test('selectNewConsent return a consent object', () => {
    expect(selectNewConsent({
      newConsent: {
        foo: 1,
        bar: '2'
      }
    })).toEqual({
      foo: 1,
      bar: '2'
    });
  });

  test('selectGivenConsents return all given consents', () => {
    expect(selectGivenConsents({
      newConsent: {
        givenConsents: []
      }
    })).toEqual([]);

    expect(selectGivenConsents({
      newConsent: {
        givenConsents: [{ id: 1, text: 'Random' }]
      }
    })).toEqual([{ id: 1, text: 'Random' }]);
  });

  test('selectConsentGivenState return is any consent selected', () => {
    expect(selectConsentGivenState({
      newConsent: {
        foo: 1,
        bar: '2',
        givenConsents: []
      }
    })).toEqual(false);

    expect(selectConsentGivenState({
      newConsent: {
        foo: 1,
        bar: '2',
        givenConsents: [{ id: 1, text: 'Random' }]
      }
    })).toEqual(true);
  });
});
