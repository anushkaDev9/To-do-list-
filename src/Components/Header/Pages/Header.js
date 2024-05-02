import React from 'react'
import './Header.css'
import HeaderText from '../Components/HeaderText'
import AddItems from '../Components/AddItems/Pages/AddItems'
const Header = () => {
  return (
    <div className='div-header'>
       <HeaderText/>
       <AddItems/>
    </div>
  )
}

export default Header