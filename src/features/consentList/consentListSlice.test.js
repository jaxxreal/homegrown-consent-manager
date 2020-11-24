import React from 'react';

import consentList, {
  setCurrentPage,
  addConsent,
  selectConsents,
  selectNumberOfPages,
} from './consentListSlice';

describe('consentListSlice', () => {
  test('should handle initial state', () => {
    expect(consentList(undefined, {})).toEqual({
      consents: [],
      perpage: 2,
      currentPage: 0,
    });
  });

  test(`should handle ${addConsent.type}`, () => {
    const { consents } = consentList(undefined, {
      type: addConsent.type,
      payload: { id: 1, name: 'Greg', email: 'greg@gmail.com' }
    });

    expect(consents).toEqual([{ id: 1, name: 'Greg', email: 'greg@gmail.com' }]);

    const { consents: consents1 } = consentList({ consents }, {
      type: addConsent.type,
      payload: { id: 1, name: 'Greg', email: 'greg@gmail.com' }
    });

    expect(consents1).toHaveProperty('length', 2);
  });

  test(`should handle ${setCurrentPage.type}`, () => {
    expect(consentList(undefined, {
      type: setCurrentPage.type,
      payload: 4
    })).toEqual({
      consents: [],
      perpage: 2,
      currentPage: 4,
    });

    expect(consentList(undefined, {
      type: setCurrentPage.type,
      payload: 2
    })).toEqual({
      consents: [],
      perpage: 2,
      currentPage: 2,
    });
  });

  test(`selectConsents selects paginated consents properly`, () => {
    const consents = Array(15).fill(1).map((v, i) => i);

    let result = selectConsents({ consentList: { perpage: 2, currentPage: 0, consents }});
    expect(result).toEqual([0, 1]);
    
    result = selectConsents({ consentList: { perpage: 2, currentPage: 1, consents }});
    expect(result).toEqual([2, 3]);

    result = selectConsents({ consentList: { perpage: 2, currentPage: 7, consents }});
    expect(result).toEqual([14]);
  });

  test(`selectNumberOfPages returns number of pages properly`, () => {
    const consents = Array(15).fill(1).map((v, i) => i);

    let numberOfPages = selectNumberOfPages({ consentList: { perpage: 2, consents }});
    expect(numberOfPages).toEqual(7);

    numberOfPages = selectNumberOfPages({ consentList: { perpage: 2, consents: [1, 2, 3, 4] }});
    expect(numberOfPages).toEqual(2);

    numberOfPages = selectNumberOfPages({ consentList: { perpage: 2, consents: [1] }});
    expect(numberOfPages).toEqual(0);

    numberOfPages = selectNumberOfPages({ consentList: { perpage: 2, consents: [] }});
    expect(numberOfPages).toEqual(0);
  });
});