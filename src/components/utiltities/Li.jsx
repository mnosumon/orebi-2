import React from 'react'
import { NavLink } from 'react-router-dom'

const Li = ({content, className, to }) => {
  return (
    <>
        <NavLink className={className} to={to}>{content}</NavLink>
    </>
  )
}

export default Li