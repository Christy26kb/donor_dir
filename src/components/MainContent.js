import React, { Component} from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Toolbar,Typography,IconButton,Menu,MenuItem,FormGroup,FormControlLabel} from '@material-ui/core/';
import './Maincontent.css';
import SearchTab from './SearchTab.js';
import ToggleButton from './ToggleButton.js';

export default class MainContent extends Component {
  render() {
    return (
      <div >
        <div className='DonorText' >
         <h4 className='statusTitle' >Blood Donor's status</h4>
         <ToggleButton />
         </div>
         <SearchTab/>
      </div>
    );
  }
}


