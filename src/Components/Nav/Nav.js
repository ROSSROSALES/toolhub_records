import React, { useState } from 'react';
import "./Nav.css";
import logo from './wikilogo.png';

function Nav() {

  return (
    <>
    <div>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/leaderboard">Leaderboard</a></li>
      <li><a href="/records">Records</a></li>
    </ul>
    </div>
    <img src={logo} className="App-logo" alt="logo" />
    

      </>
  );
};

export default Nav;
