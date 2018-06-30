import React, { Component} from 'react';
import firebase from 'firebase';


export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this._signInAsync();
    this.state = {
        signedin: false,
    };
}

_signInAsync = async () => {
    await localStorage.setItem("userToken", "true");

};

  render() {
    return (
      <div>
          <h2>MainScreen.js</h2>
      </div>
    );
  }
}


