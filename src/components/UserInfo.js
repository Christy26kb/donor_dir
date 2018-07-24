import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import OfflinePinIcon from '@material-ui/icons/OfflinePin';
import Phone from '@material-ui/icons/Phone';
import {Link,Redirect} from 'react-router-dom';
import Withback_Appbar from '../components/Withback_Appbar.js';
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop:5,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    maxHeight:25,
  },
  
  text:{
      marginLeft:20,
      color:'grey',
      '&:link': {
        color: '#007c91',
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
  avatar:{
        margin: 10,
        color: '#fff',
        backgroundColor:'#007c91',
        
  },
  iconavatar:{
    margin: 10,
    color: '#fff',
    backgroundColor:'#007c91',
   
},
phone:{
    marginLeft:20,
},

});


class UserInfo extends React.Component{
    render(){
        const { classes } =this.props;
        return (
            <div >
              <div id={this.props.data.uid} className={classes.root}>
                  <Avatar className={classes.avatar}>
                  <AccountCircleIcon/>
                  </Avatar>
              </div>
            </div>
          );
    }
}

UserInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserInfo);