import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Todocontext from './Components/Context/Todocontext.js'

ReactDOM.createRoot(document.getElementById('root')).render(
   <Todocontext.Provider value={{}}>
    <App />
   </Todocontext.Provider> 
)
