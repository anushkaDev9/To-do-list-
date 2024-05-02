import React from "react";
import './ShowItem.css'
import { useState } from "react";
import TaskList from "./TaskList";
import { VscChromeClose } from "react-icons/vsc";
const ShowItem = (props) => {
  
  

  const completed = (id) => {
    const elements = document.querySelectorAll("#task"); 
   
    elements.forEach((item, i) => {
       if(id===i){
        const ele=elements[id]
           ele.style.textDecoration='line-through'
     ele.style.opacity=0.4
       }
    });
  
  

  };
return (
<div className="div-showItems">
{props.tasks.map((task,i)=>{
  return (
    <div className="div-task" key={i}>
      <div className="circle" onClick={()=>{completed(i)}}></div>
      <div className="para">
        <p id="task">{task.name}</p>
      </div>
      <div>
        <VscChromeClose className="close" />
      </div>
    </div>
  );
})}
</div>
)

};

export default ShowItem;
