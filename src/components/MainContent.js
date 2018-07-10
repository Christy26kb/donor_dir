import React, { Component} from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Toolbar,Typography,IconButton,Switch,Menu,MenuItem,FormGroup,FormControlLabel} from '@material-ui/core/';
import './Maincontent.css'

export default class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
       DonorStatus:'true',
    };
}

_signOut = async ()=>{

  //Removing the localstorage profileinfoToken(to check if user already fill the form earlier).
  await localStorage.setItem("userToken","false");
  //Logout current user.
  firebase.auth().signOut();

};

  render() {
    return (
      <div>
        <div className='DonorText' >
         <h4>Blood Donor's status</h4>
         <Switch
          checked={this.state.DonorStatus}
          onChange={()=>this.setState({DonorStatus:'false'})}
          value={this.state.DonorStatus}
        />
         </div>
          <h3 style={{marginTop:15}} onClick={this._signOut.bind(this)}>Logout</h3>
      </div>
    );
  }
}


