import React from 'react'
import { NavLink } from 'react-router-dom'

const Contacts = () => {
  return (
    <>
      <h1>Contacts Page</h1>
      <ul>
        <li><NavLink to={'1'}>Contact 1</NavLink></li>
        <li><NavLink to={'2'}>Contact 2</NavLink></li>
      </ul>
    </>
  )
}

export default Contacts
