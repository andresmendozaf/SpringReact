import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Pruebas de REACT
// const h1 = React.createElement('h1', null, 'Hola Mundo!!!');
// const div = React.createElement('div', null, React.createElement('ul', null, React.createElement('li', null, 'Item 1')));

const h2 = <div><ul><li>Hola Mundo</li></ul></div>;

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  
  //h1
  // div
  h2
  
)
