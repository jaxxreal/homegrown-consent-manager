import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '450xp',
  },
  textFieldContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  consentLegend: {
    textAlign: 'center',
  },
}));

export const ConsentForm = (props) => {
  const classes = useStyles();
  const {
    name,
    email,
    setName,
    setEmail,
    isFormValid,
    onSubmit,
    consentSelect,
  } = props;

  function handleSubmit(ev) {
    ev.preventDefault();
    onSubmit();
  }

  return (
    <form data-testid="consent-form" onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
        <div className={classes.textFieldContainer}>
          <TextField
            id="name-text-field"
            data-testid="name-text-field"
            type="text"
            label="Name"
            value={name}
            onChange={ev => setName(ev.target.value)}
          />
          <TextField
            id="email-text-field"
            data-testid="email-text-field"
            type="email"
            style={{ marginLeft: '15px' }}
            label="Email address"
            value={email}
            onChange={ev => setEmail(ev.target.value)}
          />
        </div>
        <div>
          <p className={classes.consentLegend}>I agree to:</p>
          { consentSelect }
        </div>
        <Button
          data-testid="consent-submit-button"
          disabled={!isFormValid}
          variant="contained"
          color="primary"
        >
          Give consent
        </Button>
    </form>
  );
}