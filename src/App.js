import React from 'react';
// import logo from './logo.svg';
// import Profile from './features/Profile/Profile'
// import Clock from './features/Clock/Clock'
import { Friend } from './features/Friend/Friend'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        {/* <Profile printName={this.printName} /> */}
        {/* <Clock /> */}
        <Friend />
      </div>
    );
  }
}

export default App;
