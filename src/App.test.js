import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import store from './app/store';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  );

  expect(getByText(/Give consent/i)).toBeInTheDocument();
});
