import React, { Component } from 'react';

import SearchTab from './SearchTab.js';
export default class MainContent extends Component {
  render() {
    return (
      <div >
        <p style={{ color: 'grey', marginBottom: 30 }}>Search by  blood groups</p>
        <SearchTab />
      </div>
    );
  }
}


