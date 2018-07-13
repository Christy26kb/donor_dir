import React, { Component} from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Toolbar,Typography,IconButton,Switch,Menu,MenuItem,FormGroup,FormControlLabel} from '@material-ui/core/';
import './Maincontent.css'
import SearchTab from './SearchTab.js'
export default class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
       donorstatus:true,
    };
}

_signOut = async ()=>{

  //Removing the localstorage profileinfoToken(to check if user already fill the form earlier).
  await localStorage.setItem("userToken","false");
  //Logout current user.
  firebase.auth().signOut();

};

handleToggle = name => event => {
  this.setState({ [name]: event.target.checked });
};

  render() {
    return (
      <div >
        <div className='DonorText' >
         <h4 className='statusTitle' >Blood Donor's status</h4>
         <Switch
          className='toggle'
          checked={this.state.donorstatus}
          onChange={this.handleToggle('donorstatus')}
          value="donorstatus"
          color="primary"
        />
         </div>
         <SearchTab/>
      </div>
    );
  }
}


