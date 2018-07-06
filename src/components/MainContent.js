import React, { Component} from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Toolbar,Typography,IconButton,Switch,Menu,MenuItem,FormGroup,FormControlLabel} from '@material-ui/core/';
import './MScreen.css'

export default class MainContent extends Component {
  constructor(props) {
    super(props);
    //this._signInAsync();
    this.state = {
       DonorStatus:true,
    };
}

_signOut = ()=>{
firebase.auth().signOut();
};

/*_signInAsync = async () => {
    await localStorage.setItem("userToken", "true");

};*/

  render() {
    return (
      <div>
        <div className='DonorText' >
         <h4 className='toggle'>Donor's status (Available/Non-Available)</h4>
         <Switch
          checked={this.state.DonorStatus}
          onChange={()=>this.setState({DonorStatus:true ?false :true})}
          value="DonorStatus"
        />
         </div>
          <h3 style={{marginTop:15}}onClick={this._signOut}>Logout</h3>
      </div>
    );
  }
}


