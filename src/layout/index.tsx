import React from 'react';
import ReactDOM from 'react-dom';
import Store from 'react-hookie-store';
import Project from './project';
import Navbar from '../component/Navbar';

function Main () {
  ReactDOM.render(
    <Store>
      <Navbar />
      <Project />
    </Store>,
    document.getElementById('app')
  );
}

// Wait for Transition End
// setTimeout(() => Main(), 1000);
Main();
