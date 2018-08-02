import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { IconButton, Drawer, List, ListItem, Divider, Toolbar, Chip } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EditIcon from '@material-ui/icons/Edit';
import firebase from 'firebase';
import { NavLink } from 'react-router-dom';
const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  listitems: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 35,
    minWidth: 200,
    minHeight: 20,
    borderRadius: 5,
    backgroundColor: '#E0E0E0',
    '&:link': {
      textDecoration: 'none',
      color: 'grey'
    },
    '&:hover': {
      backgroundColor: '#007c91',
      color: '#ffffff',
      opacity: 1,
      textDecoration: 'none',
    },
    '&:active': {
      color: '#ffffff',
      backgroundColor: '#007c91',
      textDecoration: 'none',
    },
    '&:focus': {
      color: '#ffffff',
      backgroundColor: '#007c91',
      textDecoration: 'none',
    },
  },
};

class Main_Drawer extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (open) => () => {
    this.setState({
      left: open,
    });
  };
  _signOut = async () => {

    //Removing the localstorage profileinfoToken(to check if user already fill the form earlier).
    await localStorage.setItem("userToken", "false");
    //Logout current user.
    firebase.auth().signOut();
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon onClick={this.toggleDrawer(true)} />
          </IconButton>
        </Toolbar>
        <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}

          >
            <List className={classes.list}>
              <ListItem style={{ position: 'fixed', top: 0, left: 0, minHeight: 100, backgroundColor: '#007c91', flexDirection: 'column', justifyContent: 'center', borderTop: 50, borderTopColor: '#007c91' }} >
                <AccountCircleIcon style={{ color: '#ffffff', minHeight: 80, minWidth: 80, marginTop: 20 }} />
                <NavLink to="/UserDetailsCollection">
                  <EditIcon style={{ color: '#ffffff', marginLeft: 200 }} />
                </NavLink>
              </ListItem>

              {/*Navigation List Items*/}
              <ListItem style={{ marginTop: 150, flexDirection: 'column', justifyContent: 'center' }}>
                <NavLink to="/MainContent" className={classes.listitems}>
                  <p style={{ color: 'inherit' }}>Search</p>
                </NavLink>
                <NavLink to="/MainContent/SettingsScreen" className={classes.listitems}>
                  <p style={{ color: 'inherit' }}>Settings</p>
                </NavLink>
                <NavLink to="/AuthenticateUser" className={classes.listitems}>
                  <p style={{ color: 'inherit' }} onClick={this._signOut}>Logout</p>
                </NavLink>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}

Main_Drawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main_Drawer);