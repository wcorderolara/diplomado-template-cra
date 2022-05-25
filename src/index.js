import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './features/Profile/Profile'
import Clock from './features/Clock/Clock'
import { Friend } from './features/Friend/Friend'
// import Effect from './features/Effect/Effect';
import PicSearch from './features/PicSearch/PicSearch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="clock-app" element={<Clock />} />
          <Route path="picsearch-app" element={<PicSearch />} />
          <Route path="profile-app" element={<Profile />} />
          <Route path="increment-app" element={<Friend />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
