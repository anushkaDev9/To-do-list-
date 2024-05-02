import React from 'react'

const Input = (props) => {
  return (
   <input type={props.type} className={props.class} id={props.id} name={props.name}/>
  )
}

export default Input
