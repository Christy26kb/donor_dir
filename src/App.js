import React, { Component} from 'react';
import './App.css';
import AuthFlowScreen from "./navigation/AuthFlowScreen.js";
import MainScreen from "./screens/MainScreen.js";
import firebase from 'firebase';
import CircularProgress from '@material-ui/core/CircularProgress';
import { BrowserRouter } from 'react-router-dom';

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
                //alert("Signed off");
                this.setState({isloading:false,signedin:false});
            } else {
                // TODO: start actual work
                //alert("Signed on");
                this.setState({signedin:true,isloading:false});

            }
        });
    };

componentWillUnmount() {
  this.unregisterAuthObserver();
}


  render() {

    //Device Dimensions.
    const height=window.screen.height;

      if(this.state.isloading)
      {
        return(
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:height/2.8}}>
          <CircularProgress color="primary" size={50} />
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
          <BrowserRouter>
          <MainScreen/>
          </BrowserRouter>
      );
      }

      }
   
  }
}

export default App;
