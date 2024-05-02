import React from 'react'
import './AddItems.css'
import './AddItems.css'
import Input from '../Components/Input'
const AddItems = () => {
  return (
    <div className="div-addItems">
      <ul>
        <li>
          <div className="circle"></div>
        </li>
        <li>
          <form>
            <Input type="text" name="addItems" class="add-items-input" />
          </form>
        </li>
      </ul>
    </div>
  );
}

export default AddItems