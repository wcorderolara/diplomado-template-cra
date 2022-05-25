import React from 'react';
// import logo from './logo.svg';
// import Profile from './features/Profile/Profile'
// import Clock from './features/Clock/Clock'
// import { Friend } from './features/Friend/Friend'
// import Effect from './features/Effect/Effect';
import PicSearch from './features/PicSearch/PicSearch';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div>
        {/* <Profile printName={this.printName} /> */}
        {/* <Clock /> */}
        {/* <Friend /> */}
        <PicSearch />
      </div>
    );
  }
}

export default App;
