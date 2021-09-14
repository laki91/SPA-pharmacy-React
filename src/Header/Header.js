import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <>
            <nav id='sidebar' className='' >
                <NavLink exact activeClassName={'activeLink'} className='nav-link' to='/' >Products</NavLink>
                <NavLink activeClassName={'activeLink'} className='nav-link' to='/about'>About</NavLink>
                <NavLink activeClassName={'activeLink'} className='nav-link' to='/add' >Add</NavLink>
                <NavLink activeClassName={'activeLink'} className='nav-link' to='/statistics'>Statistics</NavLink>
            </nav>
        </>
    )
}
