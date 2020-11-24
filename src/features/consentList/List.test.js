import React from 'react';
import { render } from '@testing-library/react';

import { List } from './List';

describe('List', () => {
  test('renders', () => {
    const items = [
      {
        id: 1,
        name: 'Bob John',
        email: 'bob@gmail.com',
        givenConsents: [
          { id: 1, text: 'Contribute to anonymous visit statistic' },
          { id: 2, text: 'Be shown targeted ads' }
        ]
      },
      {
        id: 2,
        name: 'Mr John',
        email: 'john@gmail.com',
        givenConsents: [
          { id: 1, text: 'Contribute to anonymous visit statistic' },
        ]
      },
    ]
    const { getByText } = render(<List items={items} />);

    expect(getByText('Mr John')).toBeInTheDocument();
    expect(getByText('Bob John')).toBeInTheDocument();
  });
});