import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Avatar, IconButton, } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Phone from '@material-ui/icons/Phone';
import { withRouter } from 'react-router-dom';
import Withback_Appbar from './Withback_Appbar.js';
import RowData from './RowData.js';
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
	callButton: {
		position: 'fixed',
		top: 200,
		right: 25,
	},
	avatarB: {
		color: '#fff',
		backgroundColor: '#007c91',

	},
	offlineText: {
		color: 'grey',
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
	}
});


class UserInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataitem: this.props.location.userdata,
			offlineTextData: 'Save record Offline',
		};
		this.offlineRecordStatus();
	}
	//Binding passes props from router to component props.
	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	};

	saveCurrentUserOffline = async () => {
		const userId = this.state.dataitem.uid.toString();
		//Data schema for OfflineRecordsIndex.
		var ind = {
			uid: this.state.dataitem.uid,
			name: this.state.dataitem.name,
			bloodgroup: this.state.dataitem.bloodgroup,
			mobile: this.state.dataitem.mobile,
			state: this.state.dataitem.state,
			district: this.state.dataitem.district,
			gender: this.state.dataitem.gender,
			donorstatus: this.state.dataitem.donorstatus

		};
		const userData = JSON.stringify(this.state.dataitem);
		//Fetching the offlineRecordsIndex from localStorage.
		const indexfetch = await localStorage.getItem('offlineRecordsIndex');
		var append = JSON.parse(indexfetch);
		var flag = true;
		//.Checking if the 'offlineRecordsIndex' exists previously.
		//.If it exists then fetch it and append new entry to it and push it back.
		if (append) {
			//.Checking if the userdata entered previously.
			let temp = append.map((entry) => {
				if (entry.uid == userId) {
					flag = false
				}
			});
			if (flag) {
				append.push(ind);
				await localStorage.setItem('offlineRecordsIndex', JSON.stringify(append));
				this.setState({ offlineTextData: 'Record Saved Offline' });

			}
			//.Removing the current user from 'offlineRecordsIndex' if the user exits and clicks again.
			else {
				var updated = append.filter((entry) => entry.uid !== userId);
				await localStorage.setItem('offlineRecordsIndex', JSON.stringify(updated));
				this.setState({ offlineTextData: 'Save Record Offline' });
			}
			console.log("offlinerecords exists previously");

		}
		//.If it didn't exist a new index is create with current entry.
		else {
			console.log("New offlinercordsindex created ");
			var freshIndex = [ind];
			await localStorage.setItem('offlineRecordsIndex', JSON.stringify(freshIndex));
			this.setState({ offlineTextData: 'Record Saved Offline' });
		}
		/*
		//Sample display of enetered 'offlineRecordsIndex' data. 
		const datat = await localStorage.getItem('offlineRecordsIndex');
		console.log(datat);
		*/
	};

	offlineRecordStatus = async () => {
		if (this.state.dataitem !== undefined) {
			const userid = this.state.dataitem.uid.toString();
			const statuscheck = await localStorage.getItem('offlineRecordsIndex');
			var datapack = JSON.parse(statuscheck);
			if (datapack) {
				let temp = datapack.map((entry) => {
					if (entry.uid == userid) {
						this.setState({ offlineTextData: 'Record Saved Offline' });
					}
				});

			}
		}

	};

	render() {
		const { classes } = this.props;
		return (
			<div >
				<Withback_Appbar />
				<div className={classes.root}>
					<Avatar className={classes.avatar}>
						<AccountCircleIcon className={classes.iconavatar} />
					</Avatar>
				</div>
				<div className={classes.UserInfo_base} >
					<p className={classes.statusTitle} >{this.state.dataitem != undefined ? this.state.dataitem.name : ''}</p>
				</div>
				<div className={classes.details}>

					{/*Call Button*/}
					<a href={this.state.dataitem != undefined ? `tel:+91${this.state.dataitem.mobile}` : ''}>
						<IconButton >
							<Avatar className={classes.avatarB}>
								<Phone />
							</Avatar>
						</IconButton>
					</a>
					<p className={classes.offlineText} onClick={this.saveCurrentUserOffline}>{this.state.offlineTextData}</p>
					{/*Passing label and data for each fields by iterating 'RowData'.*/}
					<RowData fieldlabel={'Blood Group'} fieldvalue={this.state.dataitem != undefined ? this.state.dataitem.bloodgroup : ''} />
					<RowData fieldlabel={'Donor Status'} fieldvalue={this.state.dataitem != undefined && this.state.dataitem.donorstatus ? 'Ready' : 'Not Ready'} />
					<RowData fieldlabel={'Gender'} fieldvalue={this.state.dataitem != undefined ? this.state.dataitem.gender : ''} />
					<RowData fieldlabel={'State'} fieldvalue={this.state.dataitem != undefined ? this.state.dataitem.state : ''} />
					<RowData fieldlabel={'District'} fieldvalue={this.state.dataitem != undefined ? this.state.dataitem.district : ''} />
					<RowData fieldlabel={'Contact'} fieldvalue={this.state.dataitem != undefined ? this.state.dataitem.mobile : ''} />
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