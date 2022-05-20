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
        <Friend src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"/>
      </div>
    );
  }
}

export default App;
