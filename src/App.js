import React from 'react';
// import logo from './logo.svg';
import Profile from './features/Profile/Profile'
import './App.css';

class App extends React.Component {

  printName() {
    alert('Welcome to React and Node Bootcamp');
  }

  render() {
    return (
      <div className="App">
        <Profile printName={this.printName} />
      </div>
    );
  }
}

export default App;
