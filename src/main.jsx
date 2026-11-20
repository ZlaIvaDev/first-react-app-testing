import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './greeting.jsx'
import Fairy from './imgtest.jsx'
import { Biog } from './greeting.jsx'
import { FaveFood } from './imgtest.jsx'
import { MyVar, MyMsg } from './imgtest.jsx'
import eyez from './assets/eyez.jpg'
import TestingLesson from './lesson.jsx'
import { TodoList } from './lesson.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Greeting/>
    <Fairy/>
    <Biog/>
    <h1>Aloha Universe!</h1>

    <p>{MyVar}</p>
    <p>{MyMsg}</p>
    <TestingLesson/>
    <img src={eyez}></img>
    <TodoList/>


  </StrictMode>,
)

