import React, { Component} from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Toolbar,Typography,IconButton,Switch,Menu,MenuItem,FormGroup,FormControlLabel} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import _AppBar from '../components/_AppBar.js';


export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    //this._signInAsync();
    this.state = {
        isdraweropen: false,
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
        <_AppBar/>
          <h2>MainScreen.js</h2>
          <h3 onClick={this._signOut}>Logout</h3>
      </div>
    );
  }
}


