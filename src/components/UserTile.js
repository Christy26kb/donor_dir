import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import OfflinePinIcon from '@material-ui/icons/OfflinePin';
import Phone from '@material-ui/icons/Phone';

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

});

  
class UserTile extends React.Component{
    render(){
        const { classes } =this.props;
        return (
            <div>
              <div className={classes.root}>
                  <Avatar className={classes.avatar}>
                  <AssignmentIcon/>
                  </Avatar>
                <Typography component="p" className={classes.text}>
                    Christy Babu
                </Typography>
                
              </div>
            </div>
          );
    }
}

UserTile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserTile);