import React from 'react'
import TaskItem from './TaskItem'
const TaskList = ({props}) => {

   <ul>
     {props.task.map((task)=>{
           return <TaskItem id={task.id} name={task.name} key={task.id}/>
     })}
   </ul>
  
}

export default TaskList