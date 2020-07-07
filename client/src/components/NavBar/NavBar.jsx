import React from 'react'
import Logo from '../../assets/logo/Logo-instock.svg'
import './NavBar.scss'

export default function NavBar() {
  return (
    <div className='nav'>
      <img src={Logo} alt=""/>
      <h3>Inventory</h3>
      <h3>Locations</h3>
    </div>
  )
}
