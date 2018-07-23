import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import OfflinePinIcon from '@material-ui/icons/OfflinePin';
import Phone from '@material-ui/icons/Phone';
import {NavLink,Route,Redirect} from 'react-router-dom';
import UserDetailsCollection from './UserDetailsCollection.js';
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
      '&:hover': {
        color: '#007c91',
        opacity: 1,
      },
      '&:focus': {
        color: '#007c91',
      },
      '&:active': {
        color: '#007c91',
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


class UserTile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
     urlloc:window.location.pathname
    };
  }

 /* shouldComponentUpdate(nextProps, nextState) {
    console.log("reached");
    console.log(this.state.urlloc);
    return shallow
  };
   */
    render(){
        const { classes } =this.props;
        return (
            <div onClick={()=>console.log(this.state.urlloc)}>
              <div id={this.props.data.uid} className={classes.root}>
                  <Avatar className={classes.avatar}>
                  <AssignmentIcon/>
                  </Avatar>
                <Typography component="p" className={classes.text}>
                    {this.props.data.name}
                </Typography>
                <NavLink to={'./Withback_Appbar.js'}>user</NavLink>
                <Route exact path='/Withback_Appbar.js' component={Withback_Appbar} />
              </div>
            </div>
          );
    }
}

UserTile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserTile);