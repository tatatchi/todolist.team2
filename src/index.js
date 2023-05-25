import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import Todo from './App';
import IconLabelButtons from './icon'
import Delete from './icon'
import ColorTextField from './input.js'


const root = ReactDOM.createRoot(document.getElementById('root'));


// const element = ;
// root.render(element);
root.render(
  <React.StrictMode>
    <App />
    {/* <ColorTextField/>
    <IconLabelButtons />
    <Delete/> */}
    
    
  </React.StrictMode>
);



