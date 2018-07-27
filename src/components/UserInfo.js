import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import OfflinePinIcon from '@material-ui/icons/OfflinePin';
import Phone from '@material-ui/icons/Phone';
import { Link, Redirect, withRouter } from 'react-router-dom';
import Withback_Appbar from '../components/Withback_Appbar.js';
import RowData from '../components/RowData.js';
const styles = theme => ({
	root: {
		marginTop: 5,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	avatar: {
		color: '#fff',
		backgroundColor: '#ffffff',
		minHeight: 100,
		minWidth: 100,
		marginRight: 15,
	},
	iconavatar: {
		minHeight: 100,
		minWidth: 100,
		color: '#007c91',
		marginRight: 15,
	},
	phone: {
		marginLeft: 20,
	},
	UserInfo_base: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	statusTitle: {
		color: 'grey',
		marginRight: 20,
		fontSize: 20,
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginRight: 20,
	},
});


class UserInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataitem: this.props.location.userdata,
		};

	}
	//Binding passes props from router to component props.
	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	};

	render() {
		const { classes, match, location, history } = this.props;
		//Pathname for "Withback_Appbar" (BackArrow)->handle.
		const repath = '/MainContent';
		console.log(this.state.dataitem);
		return (
			<div >
				<Withback_Appbar />
				<div className={classes.root}>
					<Avatar className={classes.avatar}>
						<AccountCircleIcon className={classes.iconavatar} />
					</Avatar>
				</div>
				<div className={classes.UserInfo_base} >
					<p className={classes.statusTitle} >Christy Babu</p>
				</div>
				<div className={classes.details}>
					{/*Passing label and data for each fields by iterating 'RowData'.*/}
					<RowData fieldlabel={'Blood Group'} fieldvalue={'B-'} />
					<RowData fieldlabel={'Donor Status'} fieldvalue={'Ready'} />
					<RowData fieldlabel={'Gender'} fieldvalue={'Male'} />
					<RowData fieldlabel={'State'} fieldvalue={'Kerala'} />
					<RowData fieldlabel={'District'} fieldvalue={'Ernakulam'} />
					<RowData fieldlabel={'Contact'} fieldvalue={'8138802628'} />
				</div>
			</div>
		);
	}
}

UserInfo.propTypes = {
	classes: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(UserInfo));