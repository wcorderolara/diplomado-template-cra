import React from 'react';
// import logo from './logo.svg';
// import Profile from './features/Profile/Profile'
import Clock from './features/Clock/Clock'
import './App.css';

class App extends React.Component {

  // printName() {
  //   alert('Welcome to React and Node Bootcamp');
  // }

  render() {
    return (
      <div className="App">
        {/* <Profile printName={this.printName} /> */}
        <Clock />
      </div>
    );
  }
}

export default App;
