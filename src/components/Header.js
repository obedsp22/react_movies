import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div>
                <h1>Find The Best Movies/TV Shows to watch</h1>
                <Link className='header-btn' to="/movies">Get Started</Link>
            </div>
        </header>
    )
}

export default Header