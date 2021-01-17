import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Student.js';
import University from './University.js';
import React from "react";

function App() {
  return (
    <React.Fragment>
          <University/>
          <Student name="Rick Rude" number="1111" enrolled="2"/>
      </React.Fragment>
  );
}


export default App;
