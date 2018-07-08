import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const screenwidth=window.screen.availWidth;

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection:'column',
    marginTop:35,
  
  
  },
  textField: {
    marginTop:15,
    marginBottom:15,
    marginLeft: 20,
    marginRight: 20,
    width:230,
  }
});

const gender = [
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female',
    label: 'Female',
  },
  {
    value: 'transgenders',
    label: 'Transgenders',
  },
];


const groups = [
  {
    value: 'A+',
    label: 'A+',
  },
  {
    value: 'A-',
    label: 'A-',
  },
  {
    value: 'B+',
    label: 'B+',
  },
  {
    value: 'B-',
    label: 'B-',
  },
  {
    value: 'O+',
    label: 'O+',
  },
  {
    value: 'O-',
    label: 'O-',
  },
  {
    value: 'AB+',
    label: 'AB+',
  },
  {
    value: 'AB-',
    label: 'AB-',
  },
 
];

const states = [
  {
    value: 'kerala',
    label: 'Kerala',
  },
  {
    value: 'karnataka',
    label: 'Karnataka',
  },
  {
    value: 'tamilnadu',
    label: 'Tamil-Nadu',
  },
];

const districts = [
  {
    value: 'ernakulam',
    label: 'Ernakulam',
  },
  {
    value: 'idukki',
    label: 'Idukki',
  },
  {
    value: 'thrissur',
    label: 'Thrissur',
  },
];

class UserDetailsCollection extends React.Component {
  state = {
    name: '',
    age: '',
    gender: 'male',
    weight:'',
    bloodgroup:'',
    mobile:'',
    state:'kerala',
    district:'',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
      <form noValidate autoComplete="on">
       <TextField
          required
          id="name"
          label="Name"
          value={this.state.name}
          className={classes.textField}
          onChange={this.handleChange('name')}
          margin="normal"
          helperText="Your publicly visible username"
        />
          <TextField
          id="select-gender"
          select
          className={classes.textField}
          value={this.state.gender}
          onChange={this.handleChange('gender')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your gender"
          margin="normal"
        >
          {gender.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="age"
          label="Age"
          value={this.state.age}
          onChange={this.handleChange('age')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          helperText="Your age must be above 18"
          margin="normal"
        />
        <TextField
          required
          id="weight"
          label="Weight"
          value={this.state.weight}
          onChange={this.handleChange('weight')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          helperText="Your weight must be above 50kg"
          margin="normal"
        />
         <TextField
          required
          id="select-bloodgroup"
          label="Blood Group"
          select
          className={classes.textField}
          value={this.state.bloodgroup}
          onChange={this.handleChange('bloodgroup')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your blood group"
          margin="normal"
        >
          {groups.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="select-state"
          label="State"
          select
          className={classes.textField}
          value={this.state.state}
          onChange={this.handleChange('state')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your state"
          margin="normal"
        >
          {states.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="select-district"
          label="District"
          select
          className={classes.textField}
          value={this.state.district}
          onChange={this.handleChange('district')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your district"
          margin="normal"
        >
          {districts.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="mobile"
          label="Mobile Number"
          value={this.state.mobile}
          onChange={this.handleChange('mobile')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          helperText="Your registered mobile number"
          margin="normal"
        />
      </form>
      </div>
    );
  }
}

UserDetailsCollection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserDetailsCollection);