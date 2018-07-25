import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import OfflinePinIcon from '@material-ui/icons/OfflinePin';
import Phone from '@material-ui/icons/Phone';
import {Link, Redirect, withRouter} from 'react-router-dom';
import Withback_Appbar from '../components/Withback_Appbar.js';
const styles = theme => ({
	root: {
		marginTop:5,
		display:'flex',
		flexDirection:'row',
		justifyContent:'center'
	},  
	avatar:{
				
				color: '#fff',
				backgroundColor:'#ffffff',
				minHeight:80,
				minWidth:80,
				marginRight:15,
	},
	iconavatar:{
		minHeight:80,
		minWidth:80,
		color: '#007c91',
		marginRight:15,
},
phone:{
		marginLeft:20,
},
statusTitle:{
color:'grey',

},
});


class UserInfo extends React.Component{
	//Binding passes props from router to component props.
	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	}

		render(){
				const { classes,match,location,history } =this.props;
				//Pathname for "Withback_Appbar" (BackArrow)->handle.
				const repath='/MainContent';
				console.log(location.userdata.name);
				return (
						<div >
							<Withback_Appbar redirect_to={repath}/>
							<div className={classes.root}>
									<Avatar className={classes.avatar}>
									<AccountCircleIcon className={classes.iconavatar}/>
									</Avatar>
									<div className='UserInfo_base' >
									<h4 className='statusTitle' >Christy Babu</h4>
									</div>
							</div>
						</div>
					);
		}
}

UserInfo.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(UserInfo));