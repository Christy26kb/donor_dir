import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
const styles = theme => ({
	details: {
		display: 'flex',
		flexDirection: 'row',
	},
	labelchip: {
		margin: theme.spacing.unit,
		marginTop: 20,
		backgroundColor: '#007c91',
		color: '#ffffff',
		minWidth: 150,
		maxWidth: 150,
	},
});

class RowData extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.details}>
				<Chip label={this.props.fieldlabel} className={classes.labelchip} />
				<Chip label={this.props.fieldvalue} style={{ marginTop: 20, minWidth: 140 }} />
			</div>
		);
	}
};
RowData.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(RowData);