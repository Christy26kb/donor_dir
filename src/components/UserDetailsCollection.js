import React from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const screenwidth=window.screen.availWidth;

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection:'column',
    marginTop:35,
  
  
  },
  textField: {
    marginTop:25,
    marginBottom:15,
    marginLeft: 20,
    marginRight: 20,
    width:230,
  },
  button: {
    margin: theme.spacing.unit,
    marginRight:40,
    marginLeft:10,
  },
});



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

  clearall(){

    this.setState({
        name: '',
        age: '',
        gender: 'male',
        weight:'',
        bloodgroup:'',
        mobile:'',
        state:'kerala',
        district:'',
    });

  };

  updateUserInfo = () => () => {
    var userid=firebase.auth().currentUser.uid;
    //Collecting data from state.
    var userentry = {
        uid: userid,
        donorstatus:true,
        name:this.state.name,
        age:this.state.age,
        bloodgroup:this.state.bloodgroup,
        weight:this.state.weight,
        mobile:this.state.mobile,
        gender:this.state.gender,
        state:this.state.state,
        district:this.state.district,
    };

    //Adding new entry to wishlist of 'user1'(it will be dynamic) with finded custom key.
    if (userid != null) {
    firebase
        .database()
        .ref("/users")
        .child(userid)
        .set(userentry, function(error) {
            if (error) {
                alert(error);
            } else {
              
                alert("User information updated succesfully");
            }
        });
      }
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
      <Button variant="outlined" className={classes.button} onClick={this.clearall.bind(this)} >
        Clear
      </Button>
         <Button variant="outlined" className={classes.button} onClick={this.updateUserInfo().bind(this)}>
        Save & Continue
      </Button>
      </div>
    );
  }
}


//..Static Data for dropdown listitems states,districts,gender and bloodgroup form elements.
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
    value: 'Others',
    label: 'Others',
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
  {
    value: 'trivandrum',
    label: 'Trivandrum',
  },
  {
    value: 'kollam',
    label: 'Kollam',
  },
  {
    value: 'alappuzha',
    label: 'Alappuzha',
  },
  {
    value: 'pathanamthitta',
    label: 'Pathanamthitta',
  },
  {
    value: 'kottayam',
    label: 'Kottayam',
  },
  {
    value: 'palakkad',
    label: 'Palakkad',
  },
  {
    value: 'malappuram',
    label: 'Malappuram',
  },
  {
    value: 'kozhikode',
    label: 'Kozhikode',
  },
  {
    value: 'wayanad',
    label: 'Wayanad',
  },
  {
    value: 'kannur',
    label: 'Kannur',
  },
  {
    value: 'kasargode',
    label: 'Kasargode',
  },
];


UserDetailsCollection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserDetailsCollection);