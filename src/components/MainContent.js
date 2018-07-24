import React, { Component} from 'react';
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


