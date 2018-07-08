import React, { Component} from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Toolbar,Typography,IconButton,Switch,Menu,MenuItem,FormGroup,FormControlLabel, AppBar} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import _AppBar from '../components/_AppBar.js';
import MainContent from '../components/MainContent.js';
import MyHeader from '../components/MyHeader.js';
import UserDetailsCollection from '../components/UserDetailsCollection.js';
import './MScreen.css'

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    //this._signInAsync();
    this.state = {
       DonorStatus:false,
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
        <div className='base'>
        {this.state.DonorStatus ? <MainContent/> : <UserDetailsCollection/>}
        </div>
      </div>
    );
  }
}


