import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/es/ArrowBack';
import firebase from 'firebase';
const styles = {
  root: {
    flexGrow: 1,
    flexWrap: 'wrap',
  },
  flex: {
    flex: 1,
  },
  backButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appbar: {
    backgroundColor: '#007c91',
    width: '100%',
  },
};

class Withback_Appbar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = async () => {
    this.setState({ anchorEl: null });
  };

  _signOut = async () => {

    //Removing the localstorage profileinfoToken(to check if user already fill the form earlier).
    await localStorage.setItem("userToken", "false");
    //Logout current user.
    firebase.auth().signOut();
    this.setState({ anchorEl: null });
  };

  navBack = () => {
    window.history.back();
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar>
            <IconButton className={classes.backButton} color="inherit" aria-label="back">
              <ArrowBack onClick={this.navBack} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Withback_Appbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Withback_Appbar);