import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './App.css'


function App() {
  const [date, setDate] = useState(new Date())
useEffect(() => {
  const timer = setInterval(() => {
    setDate(new Date());
  }, 1000);
  return (() => {
    clearInterval(timer)
  })
});

  return (
    <div className="d-flex flex-column align-items-center">
    <h3>Time: {date.toLocaleTimeString()}</h3>
    <h4>Date: {date.toLocaleDateString()}</h4>
    <Calendar value={date}/>
    </div>
  )
}

export default App
