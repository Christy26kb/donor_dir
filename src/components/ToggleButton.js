import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import firebase from 'firebase';
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
  constructor(props) {
    super(props);
    this.fetchDonorStatus();
    this.state = {
      checkedA: true,
    };
  }


  fetchDonorStatus = () => {

    const usrid = firebase.auth().currentUser.uid;
    return firebase
      .database()
      .ref("/users")
      .child(usrid)
      .once("value", (data) => {
        if (data.val() != undefined && data.val().donorstatus == true) {
          this.setState({ checkedA: true });
        } else {
          this.setState({ checkedA: false });
        }
      });

  };

  handleToggle = name => event => {

    // Setting Donor availibility according to 'ToggleButton'.
    this.setState({ [name]: event.target.checked });
    this.updateDonorStatus(event.target.checked);
  };


  updateDonorStatus = (action) => {
    const usrid = firebase.auth().currentUser.uid;
    return firebase
      .database()
      .ref("/users")
      .child(usrid)
      .update({
        "donorstatus": action
      }, (error) => {
        if (error) {
          console.log('update not succesfull');
        }
        else {
          console.log('update succesfull');
        }
      });
  };


  render() {
    const { classes } = this.props;

    return (
      <Switch
        checked={this.state.checkedA}
        onChange={this.handleToggle('checkedA')}
        value="checkedA"
        style={{ alignSelf: 'center' }}
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