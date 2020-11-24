import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  consentList: {
    listStyle: 'none',
    padding: '10px',
    border: '1px solid',
  }
}));

export const ConsentSelectForm = ({ consents, selectedConsents, toggleConsent }) => {
  const classes = useStyles();

  return (
    <ul className={classes.consentList}>
      { consents.map(c => (
        <li key={c.id}>
          <FormControlLabel
            control={
              <Checkbox
                data-testid={`consent-checkbox-${c.id}`}
                checked={selectedConsents.some(s => s.id === c.id)}
                onChange={ev => toggleConsent(c)}
              />
            }
            label={c.text}
          />
        </li>
      )) }
    </ul>
  );
}
