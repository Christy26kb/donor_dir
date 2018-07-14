import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import Switch from '@material-ui/core/Switch';

const styles = theme => ({
  colorSwitchBase: {
    color: '#007c91',
    '&$colorChecked': {
      color: '#007c91',
      '& + $colorBar': {
        backgroundColor: '#007c91',
      },
    },
  },
  colorBar: {},
  colorChecked: {},
  
});

class ToggleButton extends React.Component {
  render() {
    const { classes } = this.props;

    return (
            <Switch
                style={{alignSelf:'center'}}
                classes={{
                    switchBase: classes.colorSwitchBase,
                    checked: classes.colorChecked,
                    bar: classes.colorBar,
                }}
            />
    );
  }
}

ToggleButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToggleButton);