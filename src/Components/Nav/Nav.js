import React, { useState } from 'react';
import "./Nav.css";

function Nav() {

  return (
    <>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/leaderboard">Leaderboard</a></li>
      <li><a href="/records">Records</a></li>
    </ul>
    </>
  );
};

export default Nav;
