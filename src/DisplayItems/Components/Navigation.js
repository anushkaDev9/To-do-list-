import React from 'react'
import './Navigation.css'
const Navigation = (props) => {
  return (
    <div className="div-Navigation">
      <div>
        <p>{props.tasks.length} items left</p>
      </div>
      <div>
        <ul>
          <li>All</li>
          <li>Active</li>
          <li>Completed</li>
        </ul>
      </div>
      <div>
        <p>Clear Completed</p>
      </div>
    </div>
  );
}

export default Navigation
