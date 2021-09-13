import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <>
            <nav id='sidebar' className='' >
                <NavLink className='nav-link' to='/' >Products</NavLink>
                <NavLink className='nav-link' to='/about' >About</NavLink>
                <NavLink className='nav-link' to='/add' >Add</NavLink>
            </nav>
        </>
    )
}
