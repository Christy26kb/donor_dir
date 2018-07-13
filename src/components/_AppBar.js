import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Options from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Main_Drawer from './_MainDrawer.js';
import firebase from 'firebase';
const styles = {
  root: {
    flexGrow: 1,
    flexWrap:'wrap',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appbar:{
    backgroundColor:'#007c91',
  },
};

class App_Bar extends React.Component {
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

  _signOut = async ()=>{

    //Removing the localstorage profileinfoToken(to check if user already fill the form earlier).
    await localStorage.setItem("userToken","false");
    //Logout current user.
    firebase.auth().signOut();
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar>
           <Main_Drawer/>
            <Typography variant="title" color="inherit" className={classes.flex}>
             Donor's Directory
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <Options />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Settings</MenuItem>
                  <MenuItem onClick={this._signOut}>Logout</MenuItem>
                </Menu>
              </div>
            )}
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