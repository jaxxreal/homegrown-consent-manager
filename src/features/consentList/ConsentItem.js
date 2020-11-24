import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const ConsentItem = ({ name, email, givenConsents }) => (
  <TableRow>
    <TableCell component="th" scope="row">
      { name }
    </TableCell>
    <TableCell align="right">
      { email }
    </TableCell>
    <TableCell align="right">
      { givenConsents.map(c => c.text).join(', ') }
    </TableCell>
  </TableRow>
);
