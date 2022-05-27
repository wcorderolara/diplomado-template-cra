import React from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import CharacterList from './components/CharacterList/CharacterList';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';

class App extends React.Component {

  render() {
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <CharacterList />
          </div>
          <div className="column four wide">
            <CharacterDetail />
          </div>
        </div>
        {/* <div className="ui pointing menu inverted">
          <div className="ui container">
            <Link to="/" className="item"><i className="icon home"></i> Home</Link>
            <Link to="/clock-app" className="item">Clock App</Link>
            <Link to="/profile-app" className="item">Profile App</Link>
            <Link to="/picsearch-app" className="item">Pic Search App</Link>
            <Link to="/increment-app" className="item">Increment App</Link>
          </div>
        </div>
        <div className="ui container">
          <Outlet />
        </div> */}
      </div>
    );
  }
}

export default App;
