import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import './App.css';
import NewConsent from './features/newConsent/NewConsent';
import ConsentList from './features/consentList/ConsentList';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    height: '100vh',
    boxSizing: 'border-box',
  },
}));

function App() {
  const location = useLocation();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        open={true}
        variant="persistent"
        anchor="left"
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Divider />
        <List>
          <ListItem
            component="a"
            href="#/new-consent"
            selected={location.pathname.includes('new-consent')}
            button
          >
            <ListItemText primary="Give consent" />
          </ListItem>
          <ListItem
            component="a"
            href="#/consent-list"
            selected={location.pathname.includes('consent-list')}
            button
          >
            <ListItemText primary="Collected consents" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <Switch>
          <Route path="/new-consent">
            <NewConsent />
          </Route>
          <Route path="/consent-list">
            <ConsentList />
          </Route>
          <Redirect from="/" to="/consent-list"/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
