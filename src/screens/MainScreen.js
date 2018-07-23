import React, { Component} from 'react';
import firebase from 'firebase';
import _AppBar from '../components/_AppBar.js';
import MainContent from '../components/MainContent.js';
import UserDetailsCollection from '../components/UserDetailsCollection.js';
import './MScreen.css';
import Withback_Appbar from '../components/Withback_Appbar.js';


export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.profileInfoTokenFetch();
    this.state = {
       DonorProfile:false,
    };
}


updateDonorProfileState=()=>{

  this.setState({DonorProfile:true});

};


_signOut = ()=>{
firebase.auth().signOut();
};


profileInfoTokenFetch = async () => {
  const tok = await localStorage.getItem("userToken");
  if(tok=="true")
  {
    this.setState({DonorProfile:true});
  }
  else if( tok==null||tok=="false")
  {
    this.setState({DonorProfile:false});
  }
};

//A listener will be mounted for updating parent state according to changes in child components. 
  render() {
    return (
      <div>
        <_AppBar/>
        <div className='base'>
        {this.state.DonorProfile ? <MainContent/>: <UserDetailsCollection updateDonorProfileState={this.updateDonorProfileState.bind(this)}/>}
        </div>
      </div>
    );
  }
}


