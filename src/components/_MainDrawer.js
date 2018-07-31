import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { IconButton, Drawer, List, ListItem, Divider, Toolbar, Chip } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EditIcon from '@material-ui/icons/Edit';
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
    marginTop: 35,
    minWidth: 200
  }
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
                <EditIcon style={{ color: '#ffffff', marginLeft: 200 }} onClick={() => console.log('edit')} />
              </ListItem>
              <ListItem style={{ marginTop: 150, flexDirection: 'column', justifyContent: 'center' }}>
                <Chip label="Search" className={classes.listitems} />
                <Chip label="My Profile" className={classes.listitems} />
                <Chip label="Settings" className={classes.listitems} />
                <Chip label="Logout" className={classes.listitems} />
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