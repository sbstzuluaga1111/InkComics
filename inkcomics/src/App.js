import './Assets/Styles/index.css';
import React, { useState } from 'react';
import Component from './Components/Component';

function App() {
  
  return (
    <div>
        <Component/>
        <h1>hola mundo</h1>
        <a href='./inicio.html'>inicio</a>
        <br></br>
        <a href='./login.html'>login</a>
        <br></br>
        <a href='./signup.html'>signup</a>
    </div>
   
  );
}

export default App;