// import logo from './logo.svg';
import './App.css';
// import Topbar from './Topbar';

import { Route, BrowserRouter, Switch } from 'react-router-dom';
import React from 'react';
// import { ReactReduxContext } from 'react-redux';

import ChooseFloor from './Component/ChooseFloor/ChooseFloor';
import ChooseGender from './Component/ChooseGender/ChooseGender';
import ChooseHostel from './Component/Hostel/ChooseHostel';
import LoginPage from './Component/LoginPage/LoginPage'
import Mainpage from './Component/MainPage/MainPage';
import SuccessPage from './Component/SuccessPage/SuccessPage';


class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          
          <Switch>
            <Route exact path={"/"} component={LoginPage}/>
            <Route path={'/main'} component={Mainpage}/>
            <Route path={'/gender'} component={ChooseGender}/>
            <Route path={'/hostel'} component={ChooseHostel}/>
            
            <Route path={'/floor'} component={ChooseFloor}/>
            <Route path={'/success'} component={SuccessPage}/>
            {/* <Route path={'/'} component={Homepage}/> */}
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
