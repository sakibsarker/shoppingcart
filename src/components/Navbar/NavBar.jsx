import React from 'react'
import "./NavBar.scss"
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-content'>
            <div className="container">
                <div className="navbar-top flex flex-between">
                    <Link to='/' className='navbar-brand'>
                        <span className='text-regal-blue'>
                            Emart
                        </span>
                        <span className='text-gold'>Store.</span>
                    </Link>
                    <form className='navbar-search flex'>
                        <input type='text' placeholder='Search now...'/>
                        <button type='submit' className='navbar-search-btn'>
                            <i className='fas fa-search'></i>
                        </button>
                    </form>
                </div>
            </div>

        </div>
        

    </nav>
  )
}

export default NavBar