import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link, withRouter } from 'react-router-dom';
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: 25,
  },

  text: {
    fontSize: 15,
    marginLeft: 20,
    color: 'grey',
    '&:link': {
      textDecoration: 'none',
    },
    '&:hover': {
      color: '#007c91',
      opacity: 1,
      textDecoration: 'none',
    },
    '&:active': {
      color: '#007c91',
      textDecoration: 'none',
    },
    '&:focus': {
      color: '#007c91',
      textDecoration: 'none',
    },


  },
  avatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#007c91',

  },
  iconavatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#007c91',

  },
  phone: {
    marginLeft: 20,
  },

});


class UserTile extends React.Component {
  constructor(props) {
    super(props);
    /*this.state = {
     urlloc:window.location.pathname
    };
    */
  }
  render() {
    const { classes } = this.props;
    var usrdata = this.props.data;
    return (
      <div >
        <div id={this.props.data.uid} className={classes.root}>
          <Avatar className={classes.avatar}>
            <AssignmentIcon />
          </Avatar>
          <Link
            to={{
              pathname: '/MainContent/UserInfo',
              userdata: usrdata
            }}
            className={classes.text}>
            {this.props.data.name}
          </Link>
        </div>
      </div>
    );
  }
}

UserTile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(UserTile));