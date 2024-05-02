import React, { useState } from 'react'
import "./DisplayItem.css"
import ShowItem from '../Components/ShowItem'
import Navigation from '../Components/Navigation'
const DisplayItems = () => {
  const [tasks, setTasks] = useState([
    {
      name: "Jog Around the park 3x",
    },
    {
      name: "10 minutes mediatation",
    },
    {
      name: "Read for 1 hour",
    },
    {
      name: "pick up groceries",
    },
    {
      name: "Complete Todo App on frontend Mentor",
    },
  ]);
  
  return (
    <div className='div-displayItems'>
       <ShowItem tasks={tasks} />
       <Navigation tasks={tasks}/>
    </div>
  )
}

export default DisplayItems