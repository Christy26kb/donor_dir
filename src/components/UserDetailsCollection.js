import React from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});



class UserDetailsCollection extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    alertbox: false,
    alertbox2: false,
    name: '',
    age: '',
    gender: 'male',
    weight:'',
    bloodgroup:'',
    mobile:'',
    state:'kerala',
    district:'',
  };
  }

  fetchUserInfo=()=>{
      //Fetching current user unique id.
      var uid=firebase.auth().currentUser.uid;
      //Fetching data if the user have already entered profile information.
      if (uid != null) {
        firebase
            .database()
            .ref("/users")
            .child(uid)
            .once("value",(data) => {
                if(data.val()!=undefined){
                  this.setState({
                    name:data.val().name,
                    age:data.val().age,
                    gender:data.val().gender,
                    weight:data.val().weight,
                    bloodgroup:data.val().bloodgroup,
                    mobile:data.val().mobile,
                    state: data.val().state,
                    district: data.val().district,
                  });
                }
            });
          }
  }

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

  profileInfoTokenSet = async () => {
    await localStorage.setItem("userToken", "true");
};

//VIM Calling parent function from child.
  updateDonorProfileState=()=>{
    this.props.updateDonorProfileState();
  }

  updateUserInfo = () => () => {
    //Fetching current user unique id.
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

    //Validation of form data.
      if(userentry.name==''||userentry.age<18||userentry.weight<50||userentry.bloodgroup==''||userentry.district==''||userentry.mobile.length!=10)
      {
        this.setState({alertbox:true});
      }
      else
      {
         //Adding new entry to 'users'(it will be dynamic) with finded custom key.
          if (userid != null) {
            firebase
                .database()
                .ref("/users")
                .child(userid)
                .set(userentry,(error) => {
                    if (error) {
                        alert(error);
                    } else {
                       //Succes alert snackbar.
                       this.setState({alertbox2:true});
                      //Setting token on localstorage for user profile details tracking.
                      this.profileInfoTokenSet();
                      this.updateDonorProfileState();
                    }
                });
              }
      }

};

  componentWillMount(){
    this.fetchUserInfo();
  }


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
          maxLength={10}
          
        />
        
      </form>
      <Button variant="outlined" className={classes.button} onClick={this.clearall.bind(this)} >
        Clear
      </Button>
         <Button variant="outlined" className={classes.button} onClick={this.updateUserInfo().bind(this)}>
        Save & Continue
      </Button>

      
      <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={this.state.alertbox}
          autoHideDuration={6000}
          onClose={()=>this.setState({alertbox:false})}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">You must fill all the above fields and satisfy the blood donor's criteria mentioned below each fields! </span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={()=>this.setState({alertbox:false})}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />

        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={this.state.alertbox2}
          autoHideDuration={3000}
          onClose={()=>this.setState({alertbox2:false})}
          ContentProps={{
            'aria-describedby': 'message-id2',
          }}
          message={<span id="message-id2">User information updated succesfully.</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={()=>this.setState({alertbox2:false})}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
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