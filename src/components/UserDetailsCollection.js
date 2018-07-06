import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const screenwidth=window.screen.availWidth;

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection:'column',
    width:screenwidth,
    paddingTop:30,
  
  },
  textField: {
    marginLeft:30,
    marginRight:20,
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class UserDetailsCollection extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
       <TextField
          id="with-placeholder"
          label="Name"
          placeholder="Your visible user name"
          className={classes.textField}
          margin="normal"
        />
      </form>
    );
  }
}

UserDetailsCollection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserDetailsCollection);