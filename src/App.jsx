import React from 'react'
import CountDownTimer from './components/CountDownTimer'
import TaskManagement from './components/TaskManagement'
import Quotes from './components/Quotes'

const App = () => {
  return (
    <>
     <CountDownTimer/>
     <div className="app-container container mt-4">
     <Quotes/>
     </div>
     <TaskManagement/>
    </>
  )
}

export default App


