import React from 'react'
import ReactDOM from 'react-dom/client'
import {ContadorApp} from './ContadorApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* {para definir que sea int} */}
    <ContadorApp valor={7}/>
  </React.StrictMode>,
)
