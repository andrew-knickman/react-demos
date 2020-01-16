import React, { Component } from 'react';
import './App.css';
import data from './index.js';


function GetName(props) {
  return <h3><u>Full Name</u> <br/><i>{props.name}</i></h3>
}

class App extends Component {
  render() 
  {
      return (
      <div className="App">
      <ProfileHeader/>
      <GetName name={data.fullName}/>
      <ProfileImage/>
      <ProfileDetails/>
      <ProfileLink/>
      </div>
    );

  }
}
class ProfileHeader extends Component {
 render() {
    return (
      <h1 className="ProfileName">{data.name}</h1>
    );
  }
}
class ProfileImage extends Component {
  render() {
    return (
      <img src= {data.imgUrl}/>
    );
  }
}
class ProfileDetails extends Component {
  render() {
    return (
      <div>
        <b>
        <ol>
          <li>{data.hobbyList[0]}</li>
          <li>{data.hobbyList[1]}</li>
          <li>{data.hobbyList[2]}</li>
        </ol>
        </b>
      </div>
    );
  }
}
class ProfileLink extends Component {
  render() {
    return (
      <a className="LinkedIn" href={data.link}>Check out my LinkedIn!</a>
    )
  }
}

export default App;
