import React, { Component } from 'react';
import './App.css';
import AuthFlowScreen from "./navigation/AuthFlowScreen.js";
import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB7gr2G87e7927TdqH2bfI5BFmshSPsosA",
  authDomain: "donor-dir.firebaseapp.com",
  databaseURL: "https://donor-dir.firebaseio.com",
  projectId: "donor-dir",
  storageBucket: "donor-dir.appspot.com",
  messagingSenderId: "665056503517"
};
firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
       <AuthFlowScreen/>
    );
  }
}

export default App;
