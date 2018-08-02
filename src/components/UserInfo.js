import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Avatar, IconButton, } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import OfflinePinIcon from '@material-ui/icons/OfflinePin';
import Phone from '@material-ui/icons/Phone';
import { withRouter } from 'react-router-dom';
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
	callButton: {
		position: 'fixed',
		top: 200,
		right: 25,
	},
	avatarB: {
		color: '#fff',
		backgroundColor: '#007c91',

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