import React from 'react'
import Iamge from './utiltities/Iamge'
import Logo from '../assets/images/logo.png'
import Ul from './utiltities/Ul'
import { NavLink } from 'react-router-dom'
import Li from './utiltities/Li'

const Header = () => {
  return (
    <nav className=''>
        <div className="container mx-auto">
            <div className="nav_wrapper bg-slate-500 flex justify-between items-center">
                <div className="nav_logo">
                    <a href="#">
                        <picture>
                            <Iamge source={Logo} className="" alt="alt"/>
                        </picture>
                    </a>
                </div>
                <div className="nav_menu">
                    <Ul>
                        <Li className='font-dm text-base' content="Home" to="/"/>
                        <li>
                            <NavLink to="/shop">Shop</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts">Contacts</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/journal">Journal</NavLink>
                        </li>
                    </Ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header