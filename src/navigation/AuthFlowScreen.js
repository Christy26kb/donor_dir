import React, { Component} from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import UserDetailsCollectionScreen from '../screens/UserDetailsCollectionScreen';
import './AFstyles.css';


// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '../screens/UserDetailsCollectionScreen.js',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
 
};


export default class AuthFlowScreen extends Component {
    constructor(props) {
        super(props);
        this._initializeAuth();
        this.state = {
            login: false,
        };
    }

    _initializeAuth = async () => {
        await firebase.auth().onAuthStateChanged((user) => {
            if (user == null) {
                // TODO: start sign-in flow
                alert("Signed off");
            } else {
                // TODO: start actual work
                //alert("Signed on");
                this.setState({login:true});
            }
        });
    };

    componentWillUnmount= () =>{
        this.subscriptions.unsubscribe();
    }

  render() {
      if(!this.state.login){
        return (
            <div className='base-container'>
              <h3 className='header-text'>Join our community</h3>
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
            </div>
          );
      }
      else{
        return (
            <div className='base-container'>
              <UserDetailsCollectionScreen/>
            </div>
          );
      }
   
  }
}


