import React from 'react'
import './navbar.css'
import {Search,NotificationsActive,ArrowDropDown} from '@material-ui/icons/'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [ShowNav, setShowNav] = useState(false);
    window.onscroll = ()=>{
        setShowNav(window.pageYOffset ===0 ?false : true);
        return ()=> (window.onscroll = null);
    }
    const navigate = useNavigate()
    return (
        <nav className={ShowNav ? 'navbar black__nav':'navbar'} >

                <div onClick={()=>{navigate('/')}} className='logo'>Netflix</div>
                <div className='nav-links'>
                    <ul>
                        <li>Home</li>
                        <li>Tv Shows</li>
                        <li>Movies</li>
                        <li>New & Popular</li>
                        <li>My List</li>
                    </ul>
                </div>
            <div className='right-navbar'>
                <div className='search_bar'>
                    <i><Search></Search></i>
                    <input type="text" name='text' />
                </div>

                <i><NotificationsActive></NotificationsActive></i>
                <div className='category-menu'>
                    <i onClick={()=>{navigate('/profile')}} ><ArrowDropDown></ArrowDropDown></i>
                    <div className='category-items'></div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
