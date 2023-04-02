import React, { useState } from 'react'
import "./NavBar.scss"
import { Link } from 'react-router-dom'
const NavBarPG = () => {
    const [isSlidebarOpen,setIsSlidebarOpen]=useState(false);
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
                    <div className="navbar-btns">
                        <Link to='/cart' className='add-to-cart-btn flex'>
                        <span className='btn-ico'>
                            <i className='fas fa-shopping-cart'></i>
                            </span>
                            <div className="btn-txt fw-3">cart
                            <span className='cart-count-value'>0</span>
                            </div>
                            </Link>
                    </div>


                </div>
            </div>
            <div className="navbar-bottom bg-regal-blue">
                <div className="container flex flex-between">
                    <ul className={`nav-links flex ${isSlidebarOpen?'show-nav-links':''}` }>
                        <button type='button' className='navbar-hide-btn text-white'
                        onClick={()=>setIsSlidebarOpen(false)}>
                            <i className='fas fa-times'></i>

                        </button>
                        <li>
                            <Link to='/' className='nav-link text-white'>Demos</Link>
                        </li>

                    </ul>
                    <button type='button' className='navbar-show-btn text-gold'
                    onClick={()=>setIsSlidebarOpen(true)}>
                        <i className='fas fa-bars'></i>
                    </button>
                </div>


            </div>
        
        </div>
        

    </nav>
  )
}

export default NavBarPG