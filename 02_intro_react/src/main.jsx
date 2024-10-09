import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import { HolaMundoApp } from './HolaMundoApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HolaMundoApp
      usuario={{ nombre: 'Manuel ', apellido: 'Hall' }}
      id={5}
      titulo={'Hola Mundo!!!'}
    />
  </React.StrictMode>,


)
