import React from 'react'
import { NavLink } from 'react-router-dom'

const Root = () => {
  return (
    <>
      <h1>Home Page</h1>
      <NavLink to={'contacts'}>Contacts</NavLink>
    </>
  )
}

export default Root
