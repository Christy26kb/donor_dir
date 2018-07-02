import React, { Component} from 'react';
import './App.css';
import AuthFlowScreen from "./navigation/AuthFlowScreen.js";
import MainScreen from "./screens/MainScreen.js";
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
  constructor(props) {
    super(props);
    this._initializeAuth();
    //this._bootstrapAsync();
    this.state = {
        signedin: false,
        isloading:true
    };
}

 _initializeAuth = async () => {
        await firebase.auth().onAuthStateChanged((user) => {
            if (user == null) {
                // TODO: start sign-in flow
                alert("Signed off");
                this.setState({isloading:false,signedin:false});
            } else {
                // TODO: start actual work
                //alert("Signed on");
                this.setState({signedin:true,isloading:false});

            }
        });
    };


 // Fetch the token from storage then navigate to our appropriate place
 /*_bootstrapAsync = async () => {
  const userToken = await localStorage.getItem("userToken");
  this.setState({ signedin: userToken === "true" ? true : false});
};*/

  render() {

      if(this.state.isloading)
      {
        return(
          <div>
        <p>Loading</p>
        </div>
        );
      }
      else{

        if(!this.state.signedin){
          return (
            <AuthFlowScreen/>
        );
        }
      else{
        return (
          <MainScreen/>
      );
      }

      }
   
  }
}

export default App;
