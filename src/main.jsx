import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './greeting.jsx'
import GetPizza from './imgtest.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Greeting/>
    <GetPizza/>
    <h1>Aloha Universe!</h1>
  </StrictMode>,
)

