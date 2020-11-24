import React from 'react';
import { render } from '@testing-library/react';

import { ConsentItem } from './ConsentItem';

function renderTableRow(row) {
  return render(
    <table>
      <tbody>
        { row }
      </tbody>
    </table>
  );
}

describe('ConsentItem', () => {
  test('renders', () => {
    const consents = [
      { id: 1, text: 'Contribute to anonymous visit statistic' },
      { id: 2, text: 'Be shown targeted ads' }
    ];

    const { getByText } = renderTableRow(<ConsentItem
      name="Bob Dilan"
      email="bob@gmail.com"
      givenConsents={consents}
    />);

    expect(getByText('Bob Dilan')).toBeInTheDocument();
    expect(getByText('bob@gmail.com')).toBeInTheDocument();
    expect(getByText(consents.map(c => c.text).join(', '))).toBeInTheDocument();
  });
})