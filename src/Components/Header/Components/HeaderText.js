import React from 'react'
import { CiBrightnessUp } from "react-icons/ci";
import './HeaderText.css'
const HeaderText = () => {
  return (
    <div className="div-headerText">
      <p>
        TODO <CiBrightnessUp className="brightness-icon" />
      </p>
    </div>
  );
}

export default HeaderText