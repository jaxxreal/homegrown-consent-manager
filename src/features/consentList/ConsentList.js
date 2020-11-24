import React from 'react';
import { useSelector } from 'react-redux';

import { selectConsents } from './consentListSlice';

import { Pagination } from './Pagination';
import { List } from './List';

export default function ConsentList() {
  const consents = useSelector(selectConsents);

  return (
    <div>
      <h1>Consent list</h1>
      <List items={consents} />
      <Pagination />
    </div>
  );
}
