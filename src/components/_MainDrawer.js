import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {IconButton,Drawer,List,Divider,Toolbar} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import { mailFolderListItems, otherMailFolderListItems } from '../tileData';

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
};

class _MainDrawer extends React.Component {
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

    const sideList = (
      <div className={classes.list}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    return (
      <div>
        <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon onClick={this.toggleDrawer(true)}/>
            </IconButton>
            </Toolbar>
        <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

_MainDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(_MainDrawer);