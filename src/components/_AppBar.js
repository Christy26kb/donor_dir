import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Main_Drawer from './_MainDrawer.js';
import ToggleButton from './ToggleButton';
import firebase from 'firebase';
const styles = {
  root: {
    flexGrow: 1,
    flexWrap: 'wrap',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appbar: {
    backgroundColor: '#007c91',
    width: '100%',
  },
};

class App_Bar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar>
            <Main_Drawer />
            <Typography variant="title" color="inherit" className={classes.flex}>
              Donor's Directory
            </Typography>
            <ToggleButton />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

App_Bar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App_Bar);