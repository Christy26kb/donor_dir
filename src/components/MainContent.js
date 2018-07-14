import React, { Component} from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Toolbar,Typography,IconButton,Menu,MenuItem,FormGroup,FormControlLabel} from '@material-ui/core/';
import './Maincontent.css';
import SearchTab from './SearchTab.js';
import ToggleButton from './ToggleButton.js';

export default class MainContent extends Component {
  constructor(props) {
    super(props);
    this.fetchDonorStatus();
    this.state = {
       donorstatus:true,
    };
}


fetchDonorStatus=()=>{

  const usrid=firebase.auth().currentUser.uid;
  firebase
  .database()
  .ref("/users")
  .child(usrid)
  .once("value", (data) => {
      if (data.val() != undefined && data.val().donorstatus==true) {
          this.setState({donorstatus:true});
      } else {
          this.setState({donorstatus:false});
      }
  });

};

_signOut = async ()=>{

  //Removing the localstorage profileinfoToken(to check if user already fill the form earlier).
  await localStorage.setItem("userToken","false");
  //Logout current user.
  firebase.auth().signOut();

};

handleToggle = name => event => {

  //Setting Donor availibility according to 'ToggleButton'.
  const usrid=firebase.auth().currentUser.uid;
  firebase
  .database()
  .ref("/users")
  .child(usrid)
  .update({
    "donorstatus":event.target.checked
  });
  this.setState({ [name]: event.target.checked });
};


  render() {
    return (
      <div >
        <div className='DonorText' >
         <h4 className='statusTitle' >Blood Donor's status</h4>
         <ToggleButton
          checked={this.state.donorstatus}
          onChange={this.handleToggle('donorstatus')}
          value="donorstatus"
        />
         </div>
         <SearchTab/>
      </div>
    );
  }
}


