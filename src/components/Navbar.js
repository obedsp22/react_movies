import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <img src="images/film.png" className='nav-logo' alt="" />
            <ul className='nav-list'>
                <li><Link className='Links' to="/">Home</Link></li>
                <li><Link className='Links' to="/movies">Movies/TV Shows</Link></li>
                <li><Link className='Links' to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar