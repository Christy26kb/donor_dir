import React, { Component} from 'react';
import firebase from 'firebase';
import _AppBar from '../components/_AppBar.js';
import MainContent from '../components/MainContent.js';
import UserDetailsCollection from '../components/UserDetailsCollection.js';
import './MScreen.css';
import {Route,Redirect,Switch} from 'react-router-dom';
import Withback_Appbar from '../components/Withback_Appbar.js';
export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.profileInfoTokenFetch();
    this.state = {
       DonorProfile:false,
    };
}


//A listener will be mounted for updating parent state according to changes in child components. 
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

  render() {
    console.log("Render times");
    return (
      <div>
        <_AppBar/>
        <div className='base'>

        {/*......Routes......*/}
        <Switch>
        <Route exact path='/MainContent' component={MainContent} />
        <Route exact path='/UserDetailsCollection' component={UserDetailsCollection} />
        <Route exact path='/Withback_Appbar' component={Withback_Appbar} />
        </Switch>
        {this.state.DonorProfile ? <Redirect to='/MainContent'/>: <UserDetailsCollection updateDonorProfileState={this.updateDonorProfileState.bind(this)}/>}
        </div>
      </div>
    );
  }
}


