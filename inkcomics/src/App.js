import './Assets/Styles/index.css';
import React, { useState } from 'react';
import Component from './Components/NavComponent';
import Context from './Components/iniComponent';

function App() {
  
  return (
    <div className='container'>

      <div> <Component /></div>
      

      <div className='centrado content'>
        
        <h1>contenido de preview</h1>

      </div>

    
      <div>
      <div className='centrado contexto'>
        <Context />
      </div>
      </div> 
      

    </div>
   
  );
}

export default App;