import React, { Component } from "react"
import "../LoginPage/LoginPage.module.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Topbar from '../Topbar/Topbar';
import Mainpage from "../MainPage/MainPage";


firebase.initializeApp({
  apiKey: "AIzaSyB3EAfDcUx5FcViRraLEqfd3NRAw5Z_05E",
  authDomain: "hostel-booking-nir.firebaseapp.com"
})

class LoginPage extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div className="App">
        <Topbar />
        <h1>Hostel Allocation</h1>
        <p>Please Signin!</p>
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
         
           <Mainpage />
           
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

export default LoginPage